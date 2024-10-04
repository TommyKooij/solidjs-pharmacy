import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import { useFavoritesContext } from "../context/FavoriteContext";
import { For } from "solid-js";
import { Product } from "../types/types";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  const quantity = () => {
    return favorites.reduce((acc: number) => {
      return acc + 1;
    }, 0);
  };

  return (
    <PageLayout>
      <p class="title-group">Favoriete Producten</p>
      {quantity() > 0 ? (
        <>
          <div class="product-group">
            <For each={favorites}>
              {(favorite: Product) => (
                <A
                  href={"/Producten/" + favorite.type + "/" + favorite.id}
                  class="max-w-64"
                >
                  <Card>
                    <div class="h-[420px] max-h-[420px] flex flex-col justify-between">
                      <div>
                        <div class="flex justify-center pb-6">
                          <img
                            src={favorite.image}
                            alt="favorite_image"
                            class="size-48"
                          />
                        </div>
                        <p class="title-card">{favorite.name}</p>
                        <p class="description-card">{favorite.description}</p>
                      </div>
                      <p class="price-card">€{favorite.price}</p>
                    </div>
                  </Card>
                </A>
              )}
            </For>
          </div>
        </>
      ) : (
        <p class="ml-10">Geen favorieten</p>
      )}
    </PageLayout>
  );
};

export default Favorites;
