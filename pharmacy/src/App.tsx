// * App component renders every page

import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import FavoritesContextProvider from "./context/FavoriteContext";

const App = (props: any) => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <FavoritesContextProvider>{props.children}</FavoritesContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
