import { useParams } from "@solidjs/router";
import { createResource, createSignal, Show } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../contexts/CartContext";
import { ProductItem } from "../Types";

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
      <section class="bg-gray-100 text-gray-700 py-8 px-20">
        <h1 class="text-4xl font-bold">{product().brand}</h1>
        <h2 class="text-xl text-gray-500">
          {product().name.charAt(0).toUpperCase()}
          {product().name.slice(1)}
        </h2>
        <div class="flex py-8 justify-between items-center gap-8">
          <img
            src={product().image}
            alt={product().name}
            class="object-cover size-[50%]"
          />
          <Card>
            <p class="py-4 text-2xl text-left font-semibold text-green-500">
              Price: €{product().price}
            </p>
            <button
              type="button"
              onClick={addProduct}
              disabled={adding()}
              class="p-2 transition duration-300 ease-in-out text-sm text-white bg-green-500 rounded-lg hover:text-gray-100 hover:bg-green-600"
            >
              Add To Basket
            </button>

            <Show when={adding()}>
              <div class="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                {product().title} was added to the cart
              </div>
            </Show>
          </Card>
        </div>
      </section>
    </Show>
  );
}