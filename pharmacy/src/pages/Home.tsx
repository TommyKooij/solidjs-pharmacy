import Card from "../components/Card";
import PageLayout from "./layout/Layout";
import DefaultImage from "../assets/1077596-200.png";
import { A } from "@solidjs/router";
import { createResource, For, Show } from "solid-js";
import { Product } from "../types/types";

async function fetchProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}

// * Home page content
const Home = () => {
  const [products] = createResource(fetchProducts);

  const reviews = [1, 2, 3];

  return (
    <PageLayout>
      <Show when={products()} fallback={<p>Loading...</p>}>
        <div class="space-y-14">
          <Carousel />
          <ProductGroup title="Nieuwe Producten" products={products()} />
          <ProductGroup title="Populaire Producten" products={products()} />
          <ReviewGroup title="Wat vinden anderen van ons" reviews={reviews} />
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
          {(product) => (
            <A href="/Product">
              <Card>
                <div class="flex justify-center">
                  <img src={DefaultImage} alt="product_image" class="size-48" />
                </div>
                <p class="title-card">{product.name}</p>
                <p class="description-card">{product.description}</p>
                <p class="price-card">€{product.price}</p>
              </Card>
            </A>
          )}
        </For>
      </div>
    </div>
  );
};

type ReviewGroupProps = {
  title: string;
  reviews: number[];
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
            <Card>
              <div>
                {stars.map((star) => (
                  <span class="material-symbols-outlined text-gray-900">
                    star
                  </span>
                ))}
              </div>
              <p class="title-card">Title</p>
              <p class="description-card">Description</p>
              <div class="flex space-x-3 mt-4">
                <img src={DefaultImage} alt="user_icon" class="user-icon" />
                <div>
                  <p class="name-card">Name</p>
                  <p class="date-card">Date</p>
                </div>
              </div>
            </Card>
          )}
        </For>
      </div>
    </div>
  );
};

export default Home;
