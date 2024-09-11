import { A } from "@solidjs/router";
import "../styles/styles.css";
import Searchbar from "./Searchbar";

// * Header content
const Header = () => {
  const pages = ["Merken", "Ons Advies", "Partners", "Contact"];

  return (
    <>
      <div class="mb-4">
        <div class="bg-green-500 w-full px-7 py-4 flex justify-between">
          <div class="text-white w-auto p-2 mx-10 text-6xl font-bold align-middle">
            <A href="/">PHARMACY</A>
          </div>
          <div class="flex">
            <div class="btn-group">
              {pages.map((page) => (
                <A href={`/${page}`} class="btn btn-default text-lg">
                  {page}
                </A>
              ))}
            </div>
            <div class="btn-group space-x-4">
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
      </div>
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

      <div class="bg-green-100 w-full flex justify-center items-center space-x-20">
        <div class="flex justify-center items-center">
          <Searchbar />
          <div class="btn-group m-2">
            {sections.map((section) => (
              <>
                <A href={`/${section}`} class="btn btn-secundary">
                  {section}
                </A>
                <span class="text-gray-400">|</span>
              </>
            ))}
          </div>
        </div>
        <div class="btn-group space-x-4">
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
