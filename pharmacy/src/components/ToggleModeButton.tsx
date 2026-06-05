import { createSignal } from "solid-js";

export const [darkTheme, setDarkTheme] = createSignal(false);

const ToggleModeButton = () => {
  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme());
  }

  return (
    <button
      class="fixed right-8 bottom-8 p-2 rounded-full border border-gray-300 shadow-md"
      classList={{
        "bg-gray-800 text-white border-gray-900": darkTheme() === true,
        "bg-white text-black border-gray-300": darkTheme() === false,
      }}
      onClick={toggleDarkTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-brightness-half"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M12 9a3 3 0 0 0 0 6v-6" />
        <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5" />
      </svg>
    </button>
  );
}

export default ToggleModeButton;