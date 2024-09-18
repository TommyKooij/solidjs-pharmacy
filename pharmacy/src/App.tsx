// * App component renders every page

import CartContextProvider from "./context/CartContext";
import FavoritesContextProvider from "./context/FavoriteContext";

const App = (props: any) => {
  return (
    <CartContextProvider>
      <FavoritesContextProvider>{props.children}</FavoritesContextProvider>
    </CartContextProvider>
  );
};

export default App;
