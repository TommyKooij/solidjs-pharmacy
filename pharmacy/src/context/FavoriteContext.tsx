import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Product } from "../types/types";

export type FavoritesContextType = {
  favorites: Product[];
  setFavorites: (favorites: Product[]) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>();

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("FavoritesContext is not valid");
  return context;
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
