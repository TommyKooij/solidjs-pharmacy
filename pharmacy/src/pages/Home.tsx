import Card from "../components/Card";
import PageLayout from "./layout/Layout";

const Home = () => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <PageLayout>
      <div class="space-y-14">
        <ProductGroup title="Nieuwe Producten" pages={pages} />
        <ProductGroup title="Populaire Producten" pages={pages} />
      </div>
    </PageLayout>
  );
};

type ProductGroupProps = {
  title: string;
  pages: number[];
};

const ProductGroup = ({ title, pages }: ProductGroupProps) => {
  return (
    <div>
      <h1 class="ml-10 mb-4 text-green-500 text-2xl font-bold">{title}</h1>
      <div class="grid grid-cols-5 gap-5 mx-10">
        {pages.map((page) => (
          <Card>
            <img src="" alt="" />
            <h2 class="text-xl font-bold">Title</h2>
            <h4 class="text-sm">Description</h4>
            <h2 class="text-green-500 text-xl font-bold mt-4">Prijs</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
