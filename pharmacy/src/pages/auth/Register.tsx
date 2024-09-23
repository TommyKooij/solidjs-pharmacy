import { A } from "@solidjs/router";

const Register = () => {
  return (
    <div class="flex justify-center min-w-max m-20">
      <div class="border border-gray-400 p-10">
        <p class="text-green-500 text-6xl font-bold">PHARMACY</p>
        <p class="text-black pt-8 text-3xl font-bold">Registreer</p>
        <Form />
        <button type="button" class="btn btn-register mt-4">
          Registreer
        </button>
        <p class="py-6">
          Heb je al een account? Log{" "}
          <A href="/Login" class="link">
            hier
          </A>{" "}
          in.
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
        <p class="text-gray-400 py-1 text-lg">Gebruikersnaam</p>
        <input
          type="text"
          name="name"
          placeholder="Naam..."
          aria-label="user-name"
          class="border border-black w-full px-2 py-1 rounded-md"
        />
      </div>
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
      <div class="pt-8">
        <p class="text-gray-400 py-1 text-lg">Bevestig Wachtwoord</p>
        <input
          type="password"
          name="password"
          placeholder="Wachtwoord..."
          aria-label="confirm-password"
          class="border border-black w-full px-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default Register;
