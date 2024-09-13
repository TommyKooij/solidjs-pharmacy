import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";

const Cart = () => {
  const products = [1, 2, 3];

  return (
    <PageLayout>
      <p class="title-group">Winkelwagen</p>
      <div class="product-group-cart">
        {products.map((product) => (
          <A href="/Product">
            <Card>
              <div class="flex">
                <div class="flex justify-center">
                  <img src={DefaultImage} alt="product_image" class="size-48" />
                </div>
                <div class="ml-2">
                  <h2 class="title-card">Title</h2>
                  <h4 class="description-card">Description</h4>
                  <h2 class="price-card">Prijs</h2>
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
        ))}
      </div>
      <div class="flex justify-end m-4">
        <button type="button" class="btn btn-cart">
          Afrekenen
        </button>
      </div>
    </PageLayout>
  );
};

export default Cart;
