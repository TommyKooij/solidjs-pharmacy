import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { ProductItem } from "../pages/home";

function createCartStore() {
  const [items, setItems] = createStore<ProductItem[]>([]);

  const removeItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return {
    items,
    setItems,
    removeItem,
  };
}

type CartContextType = ReturnType<typeof createCartStore>;

export const CartContext = createContext<CartContextType>();

export const CartContextProvider: ParentComponent = (props) => {
  const store = createCartStore();

  return (
    <CartContext.Provider value={store}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error("CartContext is not valid!");
  };
  
  return context;
}
