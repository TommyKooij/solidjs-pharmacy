import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const FavoritesContext = createContext();

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

const FavoritesContextProvider = (props: any) => {
  const [favorites, setFavorites] = createStore([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
