import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Customer } from "../types/types";

export const CustomerContext = createContext();

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};

const CustomerContextProvider = (props: any) => {
  const [customers, setCustomers] = createStore<Customer[]>([]);

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
