import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../contexts/CartContext";
import { ProductItem } from "./home";

export default function Cart() {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc: number, p: ProductItem) => {
      return acc + p.quantity * p.price;
    }, 0);
  };

  return (
    <section class="text-gray-700 p-8">
      {/* Change this to table */}
      <div class="bg-white flex flex-col lg:flex-row">
        <img
          src=""
          alt=""
          class=""
        />
        <div class="mx-2 pl-2 border-l-2">
          <h2 class="font-semibold">Product Name</h2>
          <p>Name</p>
        </div>
        <div class="mx-2 pl-2 border-l-2">
          <h2 class="font-semibold">Product Price</h2>
          <p>0</p>
        </div>
        <div class="mx-2 pl-2 border-l-2">
          <h2 class="font-semibold">Product Count</h2>
          <p>0</p>
        </div>
      </div>

      <div class="max-w-md my-8 mx-auto">
        <Card variant="panel">
          {total() === 0 ? <h2 class="text-center">Shopping cart is empty</h2> : <h2 class="text-center">Your shopping cart</h2>}
          <For each={items}>
            {(item: ProductItem) => (
              <p class="my-3 text-center">
                {item.name} - €{item.price} x {item.quantity}
              </p>
            )}
          </For>

          <p class="mt-8 pt-4 border-t-2 font-bold text-center">
            Total cart price - €{total()}
          </p>
          <button class="mt-2 px-3 py-2 text-sm text-white bg-green-500 rounded-lg transition duration-300 ease-in-out hover:text-gray-100 hover:bg-green-600">
            Checkout
          </button>
        </Card>
      </div>
    </section>
  );
}