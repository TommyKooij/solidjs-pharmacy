const Card = (props) => {
  return (
    <div class="bg-white p-3 border border-green-500 rounded">
      {props.children}
    </div>
  );
};

export default Card;
