import { children, ParentProps } from "solid-js";
import { darkTheme } from "../app";

type CardProps = ParentProps<{
  variant?: "product" | "panel";
  class?: string;
}>;

const Card = (props: CardProps) => {
  const safeChildren = children(() => props.children);

  return (
    <div
      class="p-4 rounded-xl shadow-md flex flex-col"
      classList={{
        "w-full max-w-sm mx-auto": props.variant === "product",
        "w-full max-w-xl": props.variant === "panel",
        "bg-gray-800": darkTheme() === true,
        "bg-white": darkTheme() === false,
      }}
    >
      {safeChildren()}
    </div>
  );
}

export default Card;