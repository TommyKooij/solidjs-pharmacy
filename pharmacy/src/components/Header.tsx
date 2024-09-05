import { A } from "@solidjs/router";
import "../styles/styles.css";
import Searchbar from "./Searchbar";

export default function Header() {
  const pages = ["Merken", "Ons Advies", "Partners", "Contact"];
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

      <div class="bg-green-500 w-full px-7 py-4 flex justify-between">
        <div class="text-white w-auto p-2 mx-10 text-6xl font-bold align-middle cursor-default">
          PHARMACY
        </div>
        <div class="flex">
          <div class="btn-group">
            {pages.map((page) => (
              <A href={`/${page}`} class="btn btn-default text-lg">
                {page}
              </A>
            ))}
          </div>
          <div class="btn-group">
            <button class="btn btn-login">Log In</button>
            <button class="btn btn-register">Registreer</button>
          </div>
        </div>
      </div>
      <div class="bg-green-100 w-full flex justify-center items-center space-x-20">
        <div class="flex justify-center items-center">
          <Searchbar />
          <div class="btn-group">
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
        <div class="btn-group space-x-8">
          <span class="material-symbols-outlined text-green-500">favorite</span>
          <span class="material-symbols-outlined bg-green-500 text-white p-2 rounded">
            shopping_cart
          </span>
        </div>
      </div>
    </>
  );
}
