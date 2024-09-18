// * App component renders every page

import CartContextProvider from "./context/CartContext";

const App = (props: any) => {
  return <CartContextProvider>{props.children}</CartContextProvider>;
};

export default App;
