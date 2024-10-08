import { Accessor, createContext, createSignal, useContext } from "solid-js";

export type AuthContextType = {
  status: Accessor<boolean>;
  setStatus: (status: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext is not valid");
  return context;
};

const AuthContextProvider = (props: any) => {
  const [status, setStatus] = createSignal<boolean>(false);

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
