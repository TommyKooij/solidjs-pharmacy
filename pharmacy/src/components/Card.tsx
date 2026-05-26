import { children } from "solid-js";

export default function Card(props : any) {
  const safeChildren = children(() => props.children);

  return <div class="bg-white p-4 text-center rounded-xl shadow-md">
    {safeChildren()}
  </div>;
}