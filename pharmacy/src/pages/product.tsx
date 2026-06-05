import { useParams } from "@solidjs/router";
import { createResource, createSignal, Show } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../contexts/CartContext";
import { ProductItem } from "./home";
import { darkTheme } from "../app";

const fetchProduct = async (id : string) => {
  const res = await fetch("../db/MOCK_DATA.json")
  const products = await res.json();

  return products.find((p : ProductItem) => p.id.toString() === id);
};

export default function Product() {
  const params = useParams();

  const [product] = createResource(params.id, fetchProduct);

  const { items, setItems } = useCartContext();

  const [adding, setAdding] = createSignal(false);

  const addProduct = () => {
    setAdding(true);
    setTimeout(() => setAdding(false), 2000);

    // check if product exists
    const exists = items.find((p: ProductItem) => p.id === product().id);

    if (exists) {
      // just inc quantity of that product
      setItems(
        (p: ProductItem) => p.id === product().id,
        "quantity",
        (q : number) => q + 1,
      );
    }

    if (!exists) {
      // add the new product
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  return (
    <Show
      when={product()}
      fallback={<p>Loading product...</p>}
    >
      <section class="text-gray-700 px-4 py-8 sm:px-6 lg:px-8">
        <div class="max-w-7xl my-8 mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-8">
            <div
              class="rounded-xl p-6 shadow-sm"
              classList={{
                "bg-gray-800": darkTheme() === true,
                "bg-white": darkTheme() === false
               }}
            >
              <img
                src={product().image}
                alt={product().name}
                class="w-full max-h-[500px] object-contain mx-auto"
              />
            </div>
            <Card variant="panel">
              <h1
                class="text-3xl text-left font-bold"
                classList={{ "text-gray-200": darkTheme() }}
              >
                {product().brand}
              </h1>
              <p class="text-gray-500 text-left text-lg">{product().name}</p>
              <p class="text-4xl text-left font-bold text-green-500">
                €{product().price}
              </p>
              <button
                type="button"
                onClick={addProduct}
                disabled={adding()}
                class="w-full sm:w-auto px-6 py-3 mt-4 rounded-lg bg-green-500 text-white font-semibold transition hover:bg-green-600 disabled:opacity-50"
              >
                Add To Basket
              </button>
              <div class="h-12">
                <Show when={adding()}>
                  <div class="my-2 p-2 border-green-500 border-2 rounded-md inline-block">
                    Product was added to the cart!
                  </div>
                </Show>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Show>
  );
}