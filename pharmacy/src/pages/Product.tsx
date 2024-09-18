import PageLayout from "./layout/Layout";
import DefaultImage from "../assets/1077596-200.png";
import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";

async function fetchProduct(id: any) {
  const res = await fetch("http://localhost:4000/products/" + id);
  return res.json();
}

const ProductPage = () => {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <PageLayout>
        <Show when={product()} fallback={<p>Loading...</p>}>
          <div class="flex justify-center my-6">
            <img src={DefaultImage} alt="product_image" class="product-img" />
            <div class="p-4 ml-10">
              <p class="product-title">{product().name}</p>
              <p class="product-price">€{product().price}</p>
              <p class="product-description">{product().description}</p>
              <div class="pt-4">
                <button type="button" class="btn btn-add">
                  <span class="material-symbols-outlined align-middle">
                    shopping_cart
                  </span>
                  <span class="pl-2">Voeg toe aan winkelmand</span>
                </button>
                <button type="button" class="btn btn-favorite ml-2">
                  <span class="material-symbols-outlined align-middle">
                    favorite
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Show>
      </PageLayout>
    </>
  );
};

export default ProductPage;
