import Header from "../../components/Header";

const PageLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default PageLayout;
