import { A, useParams } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import { createResource, For, Match, Show, Switch } from "solid-js";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";
import { Product } from "../types/types";

async function fetchProducts() {
  const res = await fetch(`http://localhost:4000/products`);
  return res.json();
}

const SectionPage = () => {
  const params = useParams();
  const [products] = createResource(fetchProducts);

  return (
    <PageLayout>
      <Show when={products()} fallback={<p>Loading...</p>}>
        <p class="title-group">{params.type}</p>
        <div class="product-group">
          <For each={products()}>
            {(product: Product) => (
              <Switch>
                <Match when={product.type === params.type}>
                  <A href={"/Producten/" + product.type + "/" + product.id}>
                    <Card>
                      <div class="flex justify-center">
                        <img
                          src={DefaultImage}
                          alt="product_image"
                          class="size-48"
                        />
                      </div>
                      <p class="title-card">{product.name}</p>
                      <p class="description-card">{product.description}</p>
                      <p class="price-card">€{product.price}</p>
                    </Card>
                  </A>
                </Match>
              </Switch>
            )}
          </For>
        </div>
      </Show>
    </PageLayout>
  );
};

export default SectionPage;
