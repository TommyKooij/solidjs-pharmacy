import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";
import { useFavoritesContext } from "../context/FavoriteContext";
import { For } from "solid-js";
import { Product } from "../types/types";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <PageLayout>
      <p class="title-group">Favoriete Producten</p>
      <div class="product-group">
        <For each={favorites}>
          {(favorite: Product) => (
            <A href={"/Producten/" + favorite.type + "/" + favorite.id}>
              <Card>
                <div class="flex justify-center">
                  <img src={DefaultImage} alt="product_image" class="size-48" />
                </div>
                <h2 class="title-card">{favorite.name}</h2>
                <h4 class="description-card">{favorite.description}</h4>
                <h2 class="price-card">{favorite.price}</h2>
              </Card>
            </A>
          )}
        </For>
      </div>
    </PageLayout>
  );
};

export default Favorites;
