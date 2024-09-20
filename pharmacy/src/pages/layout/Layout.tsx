import Footer from "../../components/Footer";
import Header from "../../components/Header";

// * Standard page layout of each page inside the application
const PageLayout = (props: any) => {
  return (
    <div class="min-w-max">
      <Header />
      <div class="p-4 my-4">{props.children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
