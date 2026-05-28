import { children } from "solid-js";

const Card = (props : any) => {
  const safeChildren = children(() => props.children);

  return <div class="w-sm bg-white p-4 text-center rounded-xl shadow-md">
    {safeChildren()}
  </div>;
}

export default Card;