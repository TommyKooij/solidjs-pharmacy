import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";

const Favorites = () => {
  const favorites = [1, 2, 3, 4, 5, 6, 7];

  return (
    <PageLayout>
      <p class="title-group">Favoriete Producten</p>
      <div class="product-group">
        {favorites.map((favorite) => (
          <A href="/Product">
            <Card>
              <div class="flex justify-center">
                <img src={DefaultImage} alt="product_image" class="size-48" />
              </div>
              <h2 class="title-card">Title</h2>
              <h4 class="description-card">Description</h4>
              <h2 class="price-card">Prijs</h2>
            </Card>
          </A>
        ))}
      </div>
    </PageLayout>
  );
};

export default Favorites;
