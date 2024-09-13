import PageLayout from "./layout/Layout";
import DefaultImage from "../assets/1077596-200.png";

const ProductPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <PageLayout>
        <div class="flex justify-center my-6">
          <img src={DefaultImage} alt="product_image" class="size-1/4" />
          <div class="p-4 ml-10">
            <p class="product-title">Title</p>
            <p class="product-price">Prijs</p>
            <p class="product-description">Description</p>
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
      </PageLayout>
    </>
  );
};

export default ProductPage;
