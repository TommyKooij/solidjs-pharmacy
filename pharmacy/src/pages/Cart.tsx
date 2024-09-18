import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";
import { For } from "solid-js";
import { Product } from "../types/types";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { items } = useCartContext();

  return (
    <PageLayout>
      <p class="title-group">Winkelwagen</p>
      <div class="product-group-cart">
        <For each={items}>
          {(item: Product) => (
            <A href={"/Producten/" + item.id}>
              <Card>
                <div class="flex">
                  <div class="flex justify-center">
                    <img
                      src={DefaultImage}
                      alt="product_image"
                      class="size-48"
                    />
                  </div>
                  <div class="ml-2">
                    <h2 class="title-card">{item.name}</h2>
                    <h4 class="description-card">{item.description}</h4>
                    <h2 class="price-card">€{item.price}</h2>
                    <button type="button" class="btn btn-remove">
                      <span class="material-symbols-outlined align-middle">
                        delete
                      </span>
                      <span class="pl-2">Verwijder</span>
                    </button>
                  </div>
                </div>
              </Card>
            </A>
          )}
        </For>
      </div>
      <div class="flex justify-end m-4">
        <button type="button" class="btn btn-add">
          Afrekenen
        </button>
      </div>
    </PageLayout>
  );
};

export default Cart;
