import PageLayout from "./layout/Layout";

const ProductPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <PageLayout>
        <div class="flex justify-center">
          <img src="" alt="product_image" />
          <div class="ml-10 justify-start">
            <h2 class="text-xl font-bold">Title</h2>
            <h1 class="text-green-500 text-3xl font-bold">Prijs</h1>
            <h3 class="text-gray-400 text-lg pt-4">Description</h3>
            <div class="pt-4">
              <button type="button" class="btn btn-add">
                Voeg toe aan winkelmand
              </button>
              <button type="button" class="align-middle ml-4">
                <span class="material-symbols-outlined text-green-500">
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
