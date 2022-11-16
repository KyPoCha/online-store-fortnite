import CartItem from "./CartItem";

function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    incCnt = Function.prototype,
    decCnt = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.cnt;
  }, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeFromCart={removeFromCart}
            incCnt={incCnt}
            decCnt={decCnt}
          />
        ))
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li className="collection-item active">Total value: {totalPrice}</li>
      <li className="collection-item active">
        <button className="btn btn-checkout">Checkout</button>
      </li>
      <i className="material-icons cart-close" onClick={handleCartShow}>
        clear
      </i>
    </ul>
  );
}

export default CartList;
