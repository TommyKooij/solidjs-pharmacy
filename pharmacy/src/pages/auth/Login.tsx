import { A } from "@solidjs/router";

const Login = () => {
  return (
    <div class="flex justify-center min-w-max m-20">
      <div class="border border-gray-400 p-10">
        <p class="text-green-500 text-6xl font-bold">PHARMACY</p>
        <p class="text-black pt-8 text-3xl font-bold">Inloggen</p>
        <Form />
        <div class="mt-1 mb-4">
          <A href="" class="link">
            Wachtwoord vergeten?
          </A>
        </div>
        <button type="button" class="btn btn-register">
          Inloggen
        </button>
        <p class="py-6">
          Nog geen account? Registreer{" "}
          <A href="/Registreer" class="link">
            hier
          </A>
          .
        </p>
        <div class="flex justify-evenly w-full">
          <A href="" class="link">
            Privacy
          </A>
          <A href="" class="link">
            Cookies
          </A>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
