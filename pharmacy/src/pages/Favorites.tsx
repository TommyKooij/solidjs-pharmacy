import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";

const Favorites = () => {
  const favorites = [1, 2, 3, 4, 5, 6, 7];

  return (
    <PageLayout>
      <h1 class="ml-10 mb-4 text-green-500 text-2xl font-bold">
        Favoriete Producten
      </h1>
      <div class="grid grid-cols-5 gap-5 mx-10">
        {favorites.map((favorite) => (
          <A href="/Product">
            <Card>
              <div class="flex justify-center">
                <img src={DefaultImage} alt="product_image" class="size-48" />
              </div>
              <h2 class="text-xl font-bold">Title</h2>
              <h4 class="text-sm">Description</h4>
              <h2 class="text-green-500 text-xl font-bold mt-4">Prijs</h2>
            </Card>
          </A>
        ))}
      </div>
    </PageLayout>
  );
};

export default Favorites;
