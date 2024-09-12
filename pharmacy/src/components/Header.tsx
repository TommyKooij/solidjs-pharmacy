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
  const sections = ["Soorten", "Voeding", "Kinderen", "Dieren"];

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
          {sections.map((section) => (
            <>
              <A href={`/${section}`} class="btn btn-search">
                {section}
              </A>
              <span class="text-gray-400">|</span>
            </>
          ))}
        </div>
        <div class="space-x-4">
          <A href="/Favorieten" class="btn">
            <span class="material-symbols-outlined text-green-500">
              favorite
            </span>
          </A>
          <A href="/Winkelwagen" class="btn">
            <span class="material-symbols-outlined bg-green-500 text-white p-2 rounded">
              shopping_cart
            </span>
          </A>
        </div>
      </div>
    </>
  );
};

export default Header;
