import { Suspense, type Component } from 'solid-js';
import { A } from '@solidjs/router';

const App: Component<{ children: Element }> = (props) => {
  return (
    <>
      <nav class="bg-green-400 text-white p-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <A
              href="/"
              class="no-underline"
            >
              <h1 class="text-2xl font-bold uppercase">Pharmacy</h1>
            </A>
          </li>

          <li class="text-sm flex items-center space-x-1 mx-auto">
            <input
              class="w-sm p-1 bg-white text-sm text-gray-900 rounded-lg border border-green-700"
              type="text"
              value=""
            />
          </li>

          <li class="py-2 px-4">
            <A
              href="/cart"
              class="no-underline hover:underline"
            >
              Cart
            </A>
          </li>
          <li class="py-2 px-4">
            <A
              href="/account"
              class="no-underline hover:underline"
            >
              Account
            </A>
          </li>
        </ul>
      </nav>

      <main>
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  );
};

export default App;
