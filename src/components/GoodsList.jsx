import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addToCart = Function.prototype } = props;
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  console.log(goods);
  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} addToCart={addToCart} />;
      })}
    </div>
  );
}

export default GoodsList;
