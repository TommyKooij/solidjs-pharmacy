import { A } from '@solidjs/router';
import Card from '../components/Card';
import { createResource, For, Show } from 'solid-js';
import { darkTheme } from '../components/ToggleModeButton';

export type ProductItem = {
  id: number;
  company: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const fetchProducts = async () => {
  const res = await fetch("../db/MOCK_DATA.json")

  return res.json();
}

export default function Home() {
  const [products] = createResource(fetchProducts)

  return (
    <Show
      when={products()}
      fallback={<p>Loading...</p>}
    >
      <section class="text-gray-700 px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-4 justify-items-center">
          <For each={products()}>
            {(product: ProductItem) => (
              <Card variant="product">
                <img
                  src={product.image}
                  alt={product.name}
                  class="w-full h-48 object-contain"
                />
                <h2 class="mt-4 text-left text-xl sm:text-2xl font-bold" classList={{"text-gray-200": darkTheme()}}>
                  {product.brand}
                </h2>
                <p class="text-gray-500 text-left">{product.name}</p>
                <p class="text-gray-500 text-left font-bold">
                  {product.company}
                </p>
                <div class="pt-4 h-full flex justify-between items-end">
                  <span class="text-lg font-semibold text-green-500">
                    €{product.price}
                  </span>
                  <A
                    href={"/product/" + product.id}
                    class="px-3 py-2 text-sm text-white bg-green-500 rounded-lg transition duration-300 ease-in-out hover:text-gray-100 hover:bg-green-600"
                  >
                    View Product
                  </A>
                </div>
              </Card>
            )}
          </For>
        </div>
      </section>
    </Show>
  );
}
