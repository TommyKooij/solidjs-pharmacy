/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./styles/index.css";
import App from "./App";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/Product" component={ProductPage} />
      <Route path="/Favorieten" component={Favorites} />
      <Route path="/Winkelwagen" component={Cart} />
      <Route path={["/Login", "/Registreer"]} component={Login} />
    </Router>
  ),
  root!
);
