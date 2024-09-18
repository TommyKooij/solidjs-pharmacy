import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = (props: any) => {
  const [items, setItems] = createStore([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
