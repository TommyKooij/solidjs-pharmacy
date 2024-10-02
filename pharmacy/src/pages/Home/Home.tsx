import Card from "../../components/Card";
import PageLayout from "../layout/Layout";
import DefaultImage from "../assets/1077596-200.png";
import { A } from "@solidjs/router";
import { createResource, For, Show } from "solid-js";
import { Product, Review } from "../../types/types";

async function fetchProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}

async function fetchReviews() {
  const res = await fetch("http://localhost:4001/reviews");
  return res.json();
}

// * Home page content
const Home = () => {
  const [products] = createResource(fetchProducts);
  const [reviews] = createResource(fetchReviews);

  function compareFavoriteProducts(a: Product, b: Product) {
    return b.favorited - a.favorited;
  }

  function compareNewProducts(a: Product, b: Product) {
    const dateA = a.addedDate;
    const dateB = b.addedDate;
    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  }

  return (
    <PageLayout>
      <Show when={products() && reviews()} fallback={<p>Loading...</p>}>
        <div class="space-y-14">
          {/* <Carousel /> */}
          <ProductGroup
            title="Nieuwe Producten"
            products={products().sort(compareNewProducts)}
          />
          <ProductGroup
            title="Populaire Producten"
            products={products().sort(compareFavoriteProducts)}
          />
          <ReviewGroup title="Wat vinden anderen van ons" reviews={reviews()} />
        </div>
      </Show>
    </PageLayout>
  );
};

const Carousel = () => {
  return (
    <div class="flex justify-center m-8">
      <img src={DefaultImage} alt="product_image" class="size-1/4" />
      <div class="p-4 w-96">
        <p class="product-title">Title</p>
        <p class="product-descript">Description</p>
      </div>
    </div>
  );
};

type ProductGroupProps = {
  title: string;
  products: Product[];
};

// * Each product group takes 5 products and shows them in a row
const ProductGroup = ({ title, products }: ProductGroupProps) => {
  return (
    <div>
      <p class="title-group">{title}</p>
      <div class="product-group">
        <For each={products}>
          {(product, index) =>
            index() <= 5 ? (
              <A
                href={"/Producten/" + product.type + "/" + product.id}
                class="max-w-64"
              >
                <Card>
                  <div class="h-[420px] max-h-[420px] flex flex-col justify-between">
                    <div>
                      <div class="flex justify-center pb-6">
                        <img
                          src={product.image}
                          alt="product_image"
                          class="size-48"
                        />
                      </div>
                      <p class="title-card">{product.name}</p>
                      <p class="description-card">{product.description}</p>
                    </div>
                    <p class="price-card">€{product.price}</p>
                  </div>
                </Card>
              </A>
            ) : (
              <div></div>
            )
          }
        </For>
      </div>
    </div>
  );
};

type ReviewGroupProps = {
  title: string;
  reviews: Review[];
};

// * The review group takes 3 reviews and shows them in a row
const ReviewGroup = ({ title, reviews }: ReviewGroupProps) => {
  const stars = [1, 2, 3, 4, 5];

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />;

  return (
    <div class="mt-2">
      <p class="title-group">{title}</p>
      <div class="review-group">
        <For each={reviews}>
          {(review) => (
            <div class="max-w-[526px]">
              <Card>
                <div>
                  {stars.map((star, index) =>
                    review.stars > index ? (
                      <span class="material-symbols-outlined text-green-500">
                        star
                      </span>
                    ) : (
                      <span class="material-symbols-outlined text-gray-400">
                        star
                      </span>
                    )
                  )}
                </div>
                <p class="title-card">{review.title}</p>
                <p class="description-card">{review.description}</p>
                <div class="flex space-x-3 mt-4">
                  <img src={DefaultImage} alt="user_icon" class="user-icon" />
                  <div>
                    <p class="name-card">{review.customerName}</p>
                    <p class="date-card">
                      Toegevoegd op: {review.addedDate.toString()}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Home;
