function CartItem(props) {
  const {
    id,
    name,
    price,
    cnt,
    removeFromCart = Function.prototype,
    incCnt = Function.prototype,
    decCnt = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}{" "}
      <i className="material-icons cart-q" onClick={() => decCnt(id)}>
        remove
      </i>{" "}
      x{cnt}{" "}
      <i className="material-icons cart-q" onClick={() => incCnt(id)}>
        add
      </i>{" "}
      = {price * cnt}
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons cart-delete">clear</i>
      </span>
    </li>
  );
}

export default CartItem;
