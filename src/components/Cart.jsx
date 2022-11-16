function Cart(props) {
  const { cnt = 0, handleCartShow = Function.prototype } = props;

  return (
    <div className="cart" onClick={handleCartShow}>
      <i className="material-icons">shopping_basket</i>
      {cnt ? <span className="card-cnt">{cnt}</span> : null}
    </div>
  );
}

export default Cart;
