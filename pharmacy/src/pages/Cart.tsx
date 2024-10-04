import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import { For } from "solid-js";
import { Product } from "../types/types";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { items, setItems } = useCartContext();

  const quantity = () => {
    return items.reduce((acc: number) => {
      return acc + 1;
    }, 0);
  };

  const roundNumber = (price: number) => {
    return Math.round(price * 100) / 100;
  };

  const totalPrice = () => {
    return items.reduce((acc: number, p: Product) => {
      return acc + p.price;
    }, 0);
  };

  function removeProduct(itemId: number) {
    setItems([...items.filter((prod: Product) => prod.id !== itemId)]);
  }

  return (
    <PageLayout>
      <p class="title-group">Winkelwagen</p>
      <div class="min-h-96">
        {quantity() > 0 ? (
          <>
            <div class="product-group-cart">
              <For each={items}>
                {(item: Product) => (
                  <Card>
                    <div class="flex">
                      <A href={"/Producten/" + item.type + "/" + item.id}>
                        <div class="flex justify-center">
                          <img
                            src={item.image}
                            alt="product_image"
                            class="size-48"
                          />
                        </div>
                      </A>
                      <div class="ml-2">
                        <p class="title-card">{item.name}</p>
                        <p class="description-card">{item.description}</p>
                        <p class="price-card">€{item.price}</p>
                        <button
                          type="button"
                          onClick={() => removeProduct(item.id)}
                          class="btn btn-remove my-2"
                        >
                          <span class="material-symbols-outlined align-middle">
                            delete
                          </span>
                          <span class="pl-2">Verwijder</span>
                        </button>
                      </div>
                    </div>
                  </Card>
                )}
              </For>
            </div>
            <div class="flex justify-end m-4">
              <span class="inline-block align-middle p-2">
                Totaal: €{roundNumber(totalPrice())}
              </span>
              <button type="button" class="btn btn-add">
                Afrekenen
              </button>
            </div>
          </>
        ) : (
          <div class="ml-10">
            <p>Geen producten in mandje</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Cart;
