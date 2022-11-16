import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList.jsx";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  //console.log(process.env.REACT_API_KEY, process.env.REACT_API_URl);

  const addToCart = (item) => {
    const itemIndx = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndx < 0) {
      const newItem = {
        ...item,
        cnt: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndx) {
          //console.log(orderItem.cnt + 1);
          return {
            ...orderItem,
            cnt: orderItem.cnt + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((elem) => elem.id !== itemId);
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  const incCnt = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newCnt = el.cnt + 1;
        return {
          ...el,
          cnt: newCnt,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decCnt = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newCnt = el.cnt - 1;
        return {
          ...el,
          cnt: newCnt >= 0 ? newCnt : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/shop?lang=en", {
      headers: {
        Authorization: "334af6fe-1bb9ca1c-c7d670b0-33e29db0",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container component">
      <Cart cnt={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          incCnt={incCnt}
          decCnt={decCnt}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};
export default Shop;
