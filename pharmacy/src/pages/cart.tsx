import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../contexts/CartContext";
import { ProductItem } from "./home";
import { darkTheme } from "../app";

export default function Cart() {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc: number, p: ProductItem) => {
      return acc + p.quantity * p.price;
    }, 0);
  };

  return (
    <section class="text-gray-700 p-8">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            class="lg:col-span-2"
            classList={{ "text-gray-200": darkTheme() }}
          >
            <Card variant="panel">
              {total() === 0 ? (
                <h2 class="text-center">Shopping cart is empty</h2>
              ) : (
                <div class="space-y-4">
                  <For each={items}>
                    {(item) => (
                      <div class="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          class="w-full sm:w-32 h-32 object-contain"
                        />

                        <div class="flex-1">
                          <h3 class="font-semibold">{item.name}</h3>

                          <div class="mt-2 text-sm text-gray-600">
                            <p>Price: €{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                          </div>

                          <div class="mt-2">
                            <button class="text-sm underline">Remove</button>
                          </div>
                        </div>

                        <div class="font-bold text-lg">
                          €{item.price * item.quantity}
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              )}
            </Card>
          </div>

          <div
            class="lg:sticky lg:top-4"
            classList={{ "text-gray-200": darkTheme() }}
          >
            <Card variant="panel">
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="font-semibold">Subtotal</span>
                  <span>€{total().toFixed(2)}</span>
                </div>

                <div class="flex justify-between">
                  <span>Discounts</span>
                  <span>€0.00</span>
                </div>

                <div class="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>€{total().toFixed(2)}</span>
                </div>

                <button class="w-full mt-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                  Checkout
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}