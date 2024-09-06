import Header from "../../components/Header";

const PageLayout = (props) => {
  return (
    <div>
      <Header />
      <div class="p-4">{props.children}</div>
    </div>
  );
};

export default PageLayout;
