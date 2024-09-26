import { createContext, createSignal, useContext } from "solid-js";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = (props: any) => {
  const [loggedIn, setLoggedIn] = createSignal<boolean>(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
