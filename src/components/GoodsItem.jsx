function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToCart = Function.prototype,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div class="card-action">
        <button className="btn" onClick={() => addToCart({ id, name, price })}>
          Buy
        </button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}

export default GoodsItem;
