import { createSignal } from "solid-js";
import Card from "../components/Card";

export const [isLoggedIn, setIsLoggedIn] = createSignal(false);

export default function Account() {
    const toggleLogIn = () => {
      setIsLoggedIn(!isLoggedIn());
    }

  return (
    <section class="text-gray-700 p-8">
      <div class="flex justify-center items-center">
        <Card variant="panel">
          <p class="text-center">You are currently logged {isLoggedIn() ? "in" : "out"}.</p>
          <button onClick={toggleLogIn} class="max-w-max self-center px-3 py-2 mt-2 text-sm text-white bg-green-500 rounded-lg transition duration-300 ease-in-out hover:text-gray-100 hover:bg-green-600">
            Log {isLoggedIn() ? "In" : "Out"}
          </button>
        </Card>
      </div>
    </section>
  );
}