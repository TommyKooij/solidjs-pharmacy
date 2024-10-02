/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./styles/index.css";
import App from "./App";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import SectionPage from "./pages/Section";
import Register from "./pages/auth/Register";

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
      <Route path="/Producten/:type" component={SectionPage} />
      <Route path="/Producten/:type/:id" component={ProductPage} />
      <Route path="/Favorieten" component={Favorites} />
      <Route path="/Winkelwagen" component={Cart} />

      <Route path={"/Login"} component={Login} />
      <Route path={"/Registreer"} component={Register} />
    </Router>
  ),
  root!
);
