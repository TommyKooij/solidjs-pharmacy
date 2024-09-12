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
        <p class="title-carousel">Title</p>
        <p class="description-carousel">Description</p>
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
      <p class="title-group">{title}</p>
      <div class="grid grid-cols-5 gap-5 mx-10">
        {pages.map((page) => (
          <A href="/Product">
            <Card>
              <div class="flex justify-center">
                <img src={DefaultImage} alt="product_image" class="size-48" />
              </div>
              <p class="title-card">Title</p>
              <p class="description-card">Description</p>
              <p class="price-card">Prijs</p>
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
      <p class="title-group">{title}</p>
      <div class="grid grid-cols-3 gap-8 mx-10">
        {reviews.map((review) => (
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
        ))}
      </div>
    </div>
  );
};

export default Home;
