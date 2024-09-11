import { A } from "@solidjs/router";

const Login = () => {
  return (
    <div class="flex justify-center m-20">
      <div class="border border-gray-400 p-10 w-1/3">
        <h1 class="text-green-500 w-auto text-6xl font-bold align-middle">
          PHARMACY
        </h1>
        <h2 class="text-black w-auto pt-8 text-3xl font-bold align-middle">
          Inloggen
        </h2>
        <div class="pt-8">
          <p class="text-gray-400 py-1 text-lg">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            aria-label="email"
            class="border border-black w-full px-2 py-1 rounded-md"
          />
        </div>
        <div class="pt-8">
          <p class="text-gray-400 py-1 text-lg">Wachtwoord</p>
          <input
            type="password"
            name="password"
            placeholder="Wachtwoord..."
            aria-label="password"
            class="border border-black w-full px-2 py-1 rounded-md"
          />
        </div>
        <div class="py-3">
          <A href="" class="text-sm underline">
            Wachtwoord vergeten?
          </A>
        </div>
        <button type="button" class="btn btn-register mt-6">
          Inloggen
        </button>
        <p class="py-6 text-base">
          Nog geen account? Registreer{" "}
          <A href="" class="underline">
            hier
          </A>
          .
        </p>
        <div class="w-full flex justify-evenly">
          <A href="" class="text-base underline">
            Privacy
          </A>
          <A href="" class="text-base underline">
            Cookies
          </A>
        </div>
      </div>
    </div>
  );
};

export default Login;
