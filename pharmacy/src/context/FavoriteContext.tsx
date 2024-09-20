import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Product } from "../types/types";

export const FavoritesContext = createContext();

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

const FavoritesContextProvider = (props: any) => {
  const [favorites, setFavorites] = createStore<Product[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
