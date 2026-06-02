import { children, ParentProps } from "solid-js";


type CardProps = ParentProps<{
  variant?: "product" | "panel";
  class?: string;
}>;

const Card = (props: CardProps) => {
  const safeChildren = children(() => props.children);

  return (
    <div
      class="bg-white p-4 rounded-xl shadow-md flex flex-col"
      classList={{
        "w-full max-w-sm mx-auto": props.variant === "product",
        "w-full max-w-xl": props.variant === "panel",
      }}
    >
      {safeChildren()}
    </div>
  );
}

export default Card;