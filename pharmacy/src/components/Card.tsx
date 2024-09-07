// * The given props are: an image, a title, a description, and a price
const Card = (props) => {
  return (
    <div class="bg-white p-3 border border-green-500 rounded">
      {props.children}
    </div>
  );
};

export default Card;
