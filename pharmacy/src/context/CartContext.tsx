import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = (props: any) => {
  const [items, setItems] = createStore([
    { id: 100, name: "Test 1", description: "test 1", price: 9.0 },
    { id: 101, name: "Test 2", description: "test 2", price: 10.0 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
