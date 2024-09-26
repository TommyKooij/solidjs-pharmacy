// * The given props are: an image, a title, a description, and a price
const Card = (props) => {
  return <div class="product-card">{props.children}</div>;
};

export default Card;
