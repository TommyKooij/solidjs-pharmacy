import { A } from "@solidjs/router";
import "../styles/styles.css";

export default function Header() {
  const pages = ["Merken", "Ons Advies", "Partners", "Contact"];

  return (
    <div class="bg-green-500 w-full p-7 flex justify-between">
      <div class="bg-red-200 w-auto">l</div>
      <div class="flex">
        <div class="btn-group">
          {pages.map((page) => (
            <A href={`/${page}`} class="btn btn-default">
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
  );
}
