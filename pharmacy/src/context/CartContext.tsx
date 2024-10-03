import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Product } from "../types/types";

export type CartContextType = {
  items: Product[];
  setItems: (favorites: Product[]) => void;
};

export const CartContext = createContext<CartContextType>();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext is not valid");
  return context;
};

const CartContextProvider = (props: any) => {
  const [items, setItems] = createStore<Product[]>([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
