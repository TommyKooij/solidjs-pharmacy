import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import { useCartContext } from "../contexts/CartContext";
import { ProductItem } from "../pages/home";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const { items } = useCartContext();

  const quantity = () => {
    return items.reduce((acc: number, current: ProductItem) => {
      return acc + current.quantity;
    }, 0);
  };

  return (
    <>
      <nav class="bg-green-400 text-white px-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <A href="/" class="no-underline text-2xl font-bold uppercase">
              Pharmacy
            </A>
          </li>

          <li class="text-sm hidden items-center space-x-1 ml-auto lg:flex">
            <div class="py-2 px-4 relative">
              <A href="/cart" class="no-underline hover:underline">
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                  <p>Cart</p>
                </div>
                <Show when={quantity() > 0} fallback={<></>}>
                  <div class="bg-red-500 rounded-full px-2 absolute right-0 top-0">
                    {quantity()}
                  </div>
                </Show>
              </A>
            </div>

            {/* TODO: Implement a simple login interaction */}
            <div class="py-2 px-4">
              <A href="/account" class="no-underline hover:underline">
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                  </svg>
                  <p>Account</p>
                </div>
              </A>
            </div>
          </li>

          {/* Dropdown menu */}
          <li class="text-sm flex items-center space-x-1 ml-auto lg:hidden">
            <div class="py-2 px-4">
              <button
                class="p-2"
                onClick={() => setMenuOpen(!menuOpen())}
                onFocusOut={() => setMenuOpen(false)}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile dropdown */}
      <Show when={menuOpen()}>
        <div class="absolute right-0 pb-4">
          <A
            href="/cart"
            class="block text-white border-t border-white px-4 py-2 bg-green-400 hover:text-gray-100 hover:bg-green-500"
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </A>

          <A
            href="/account"
            class="block text-white rounded-bl-sm border-t border-white px-4 py-2 bg-green-400 shadow-sm hover:text-gray-100 hover:bg-green-500"
            onClick={() => setMenuOpen(false)}
          >
            Account
          </A>
        </div>
      </Show>
    </>
  );
};

export default Navbar;
