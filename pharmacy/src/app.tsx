import { createSignal, Show, Suspense, type Component } from 'solid-js';
import { A } from '@solidjs/router';
import { useCartContext } from './contexts/CartContext';
import { ProductItem } from './pages/home';

export const [darkTheme, setDarkTheme] = createSignal(false);

const App: Component<{ children: Element }> = (props) => {
  function toggleDarkTheme() {
    setDarkTheme(!darkTheme())
  }

  const { items } = useCartContext();

  const quantity = () => {
    return items.reduce((acc: number, current: ProductItem) => {
      return acc + current.quantity;
    }, 0);
  };

  return (
    <>
      <div
        class="min-h-screen"
        classList={{
          "bg-gray-900": darkTheme() === true,
          "bg-gray-100": darkTheme() === false,
        }}
      >
        <nav class="bg-green-400 text-white px-4">
          <ul class="flex items-center">
            <li class="py-2 px-4">
              <A
                href="/"
                class="no-underline text-2xl font-bold uppercase"
              >
                Pharmacy
              </A>
            </li>

            <li class="text-sm flex items-center space-x-1 ml-auto">
              <div class="py-2 px-4 relative">
                <A
                  href="/cart"
                  class="no-underline hover:underline"
                >
                  <div class="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    <p>Cart</p>
                  </div>
                  <Show
                    when={quantity() > 0}
                    fallback={<></>}
                  >
                    <div class="bg-red-500 rounded-full px-2 absolute right-0 top-0">
                      {quantity()}
                    </div>
                  </Show>
                </A>
              </div>
              <div class="py-2 px-4">
                <A
                  href="/account"
                  class="no-underline hover:underline"
                >
                  <div class="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    <p>Account</p>
                  </div>
                </A>
              </div>
            </li>
          </ul>
        </nav>

        <main>
          <Suspense>{props.children}</Suspense>
        </main>

        <button
          class="fixed right-8 bottom-8 p-2 rounded-full border border-gray-300 shadow-md"
          classList={{
            "bg-gray-800 text-white border-gray-900": darkTheme() === true,
            "bg-white text-black border-gray-300": darkTheme() === false,
          }}
          onClick={toggleDarkTheme}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brightness-half"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M12 9a3 3 0 0 0 0 6v-6" />
            <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
