// * App component renders every page

import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import CustomerContextProvider from "./context/CustomerContext";
import FavoritesContextProvider from "./context/FavoriteContext";

const App = (props: any) => {
  return (
    <AuthContextProvider>
      <CustomerContextProvider>
        <CartContextProvider>
          <FavoritesContextProvider>{props.children}</FavoritesContextProvider>
        </CartContextProvider>
      </CustomerContextProvider>
    </AuthContextProvider>
  );
};

export default App;
