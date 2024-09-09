import Card from "../components/Card";
import PageLayout from "./layout/Layout";
import DefaultImage from "../assets/1077596-200.png";
import { A } from "@solidjs/router";

// * Home page content
const Home = () => {
  const pages = [1, 2, 3, 4, 5];
  const reviews = [1, 2, 3];

  return (
    <PageLayout>
      <div class="space-y-14">
        <Carousel />
        <ProductGroup title="Nieuwe Producten" pages={pages} />
        <ProductGroup title="Populaire Producten" pages={pages} />
        <ReviewGroup title="Wat vinden anderen van ons" reviews={reviews} />
      </div>
    </PageLayout>
  );
};

const Carousel = () => {
  return (
    <div class="flex justify-center m-8">
      <img src={DefaultImage} alt="product_image" class="size-1/4" />
      <div class="p-4 w-96">
        <h1 class="text-3xl font-bold">Title</h1>
        <h3 class="text-lg pt-4">Description</h3>
      </div>
    </div>
  );
};

type ProductGroupProps = {
  title: string;
  pages: number[];
};

// * Each product group takes 5 products and shows them in a row
const ProductGroup = ({ title, pages }: ProductGroupProps) => {
  return (
    <div>
      <h1 class="ml-10 mb-4 text-green-500 text-2xl font-bold">{title}</h1>
      <div class="grid grid-cols-5 gap-5 mx-10">
        {pages.map((page) => (
          <A href="/Product">
            <Card>
              <div class="flex justify-center">
                <img src={DefaultImage} alt="product_image" />
              </div>
              <h2 class="text-xl font-bold">Title</h2>
              <h4 class="text-sm">Description</h4>
              <h2 class="text-green-500 text-xl font-bold mt-4">Prijs</h2>
            </Card>
          </A>
        ))}
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
      <h1 class="ml-10 mb-4 text-green-500 text-2xl font-bold">{title}</h1>
      <div class="grid grid-cols-3 gap-8 mx-10">
        {reviews.map((review) => (
          <Card>
            <div class="m-1">
              <div>
                {stars.map((star) => (
                  <span class="material-symbols-outlined">star</span>
                ))}
              </div>
              <h2 class="text-xl font-bold">Title</h2>
              <h4 class="text-sm">Description</h4>
              <div class="flex space-x-3 mt-4">
                <img
                  src={DefaultImage}
                  alt="user_icon"
                  class="size-10 border border-black icon"
                />
                <div>
                  <h4 class="text-sm">Name</h4>
                  <h4 class="text-xs text-gray-400">Date</h4>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
