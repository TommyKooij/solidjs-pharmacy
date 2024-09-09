import { A } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import Card from "../components/Card";
import DefaultImage from "../assets/1077596-200.png";

const Cart = () => {
  const products = [1, 2, 3];

  return (
    <PageLayout>
      <h1 class="ml-10 mb-4 text-green-500 text-2xl font-bold">Winkelwagen</h1>
      <div class="grid space-y-6 mx-10">
        {products.map((product) => (
          <A href="/Product">
            <Card>
              <div class="flex">
                <div class="flex justify-center">
                  <img src={DefaultImage} alt="product_image" class="size-48" />
                </div>
                <div class="ml-2">
                  <h2 class="text-xl font-bold">Title</h2>
                  <h4 class="text-sm text-gray-400">Description</h4>
                  <h2 class="text-green-500 text-xl font-bold mt-4">Prijs</h2>
                  <button type="button" class="btn btn-danger">
                    Verwijder
                  </button>
                </div>
              </div>
            </Card>
          </A>
        ))}
      </div>
    </PageLayout>
  );
};

export default Cart;
