import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const Login = () => {
  return (
    <div class="flex justify-center min-w-max m-20">
      <div class="border border-gray-400 p-10">
        <p class="text-green-500 text-6xl font-bold">PHARMACY</p>
        <p class="text-black pt-8 text-3xl font-bold">Inloggen</p>
        <Form />
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
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  //TODO: Finish handleSubmit function
  function handleSubmit() {
    //working on
  }

  return (
    <form onSubmit={handleSubmit} action={"/"}>
      <div class="pt-8">
        <label for="email" class="text-gray-400 py-1 text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          aria-label="email"
          onChange={(e) => setEmail(e.target.value)}
          class="border border-black w-full px-2 py-1 rounded-md"
        />
      </div>
      <div class="pt-8">
        <label for="password" class="text-gray-400 py-1 text-lg">
          Wachtwoord
        </label>
        <input
          type="password"
          name="password"
          placeholder="Wachtwoord..."
          aria-label="password"
          onChange={(e) => setPassword(e.target.value)}
          class="border border-black w-full px-2 py-1 rounded-md"
        />
      </div>
      <div class="mt-1 mb-4">
        <A href="" class="link">
          Wachtwoord vergeten?
        </A>
      </div>
      <button type="submit" class="btn btn-register">
        Inloggen
      </button>
    </form>
  );
};

export default Login;
