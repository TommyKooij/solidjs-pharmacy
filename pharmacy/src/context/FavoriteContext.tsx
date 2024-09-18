import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const FavoritesContext = createContext();

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};

const FavoritesContextProvider = (props: any) => {
  const [items, setItems] = createStore([]);

  return (
    <FavoritesContext.Provider value={{ items, setItems }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
