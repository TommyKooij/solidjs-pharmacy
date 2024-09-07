import Card from "../components/Card";
import PageLayout from "./layout/Layout";
import DefaultImage from "../assets/1077596-200.png";

// * Home page content
const Home = () => {
  const pages = [1, 2, 3, 4, 5];
  const reviews = [1, 2, 3];

  return (
    <PageLayout>
      <div class="space-y-14">
        <ProductGroup title="Nieuwe Producten" pages={pages} />
        <ProductGroup title="Populaire Producten" pages={pages} />
        <ReviewGroup title="Wat vinden anderen van ons" reviews={reviews} />
      </div>
    </PageLayout>
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
          <Card>
            <div class="flex justify-center">
              <img src={DefaultImage} alt="" />
            </div>
            <h2 class="text-xl font-bold">Title</h2>
            <h4 class="text-sm">Description</h4>
            <h2 class="text-green-500 text-xl font-bold mt-4">Prijs</h2>
          </Card>
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
  return (
    <div class="mt-2">
      <h1 class="ml-10 mb-4 text-green-500 text-2xl font-bold">{title}</h1>
      <div class="grid grid-cols-3 gap-8 mx-10"></div>
    </div>
  );
};

export default Home;
