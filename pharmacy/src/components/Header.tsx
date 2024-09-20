import { A } from "@solidjs/router";
import "../styles/styles.css";
import Searchbar from "./Searchbar";

// * Header content
const Header = () => {
  const pages = ["Merken", "Ons Advies", "Partners", "Contact"];

  return (
    <>
      <div class="header">
        <A href="/" class="logo">
          PHARMACY
        </A>
        <div class="flex space-x-4">
          <div>
            {pages.map((page) => (
              <A href={`/${page}`} class="btn btn-header">
                {page}
              </A>
            ))}
          </div>
          <div>
            <A href="/Login" class="btn btn-login">
              Log In
            </A>
            <A href="/Registreer" class="btn btn-register">
              Registreer
            </A>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
};

const Navigation = () => {
  const types = ["Voeding", "Kinderen", "Dieren", "Volwassenen"];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <div class="navigation">
        <Searchbar />
        <div class="mx-8">
          {types.map((type) => (
            <>
              <A href={`/Producten/${type}`} class="btn btn-search">
                {type}
              </A>
              <span class="text-gray-400">|</span>
            </>
          ))}
        </div>
        <div class="space-x-4">
          <A href="/Favorieten" class="btn btn-favorite">
            <span class="material-symbols-outlined align-middle">favorite</span>
          </A>
          <A href="/Winkelwagen" class="btn btn-add my-2">
            <span class="material-symbols-outlined align-middle">
              shopping_cart
            </span>
          </A>
        </div>
      </div>
    </>
  );
};

export default Header;
