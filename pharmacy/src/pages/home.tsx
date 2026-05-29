import { A } from '@solidjs/router';
import Card from '../components/Card';
import { createResource, For, Show } from 'solid-js';
import { ProductItem } from '../Types';

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
      <section class="bg-gray-100 text-gray-700 p-8">
        <div class="grid grid-cols-4 gap-10 my-4 justify-items-center">
          <For each={products()}>
            {(product: ProductItem) => (
              <Card>
                <img
                  src={product.image}
                  alt={product.brand}
                  class="object-contain"
                />
                <h2 class="my-2 text-2xl font-bold text-left">
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
                    class="p-2 transition duration-300 ease-in-out text-sm text-white bg-green-500 rounded-lg hover:text-gray-100 hover:bg-green-600"
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
