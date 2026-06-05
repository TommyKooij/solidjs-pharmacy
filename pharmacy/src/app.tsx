import { Suspense, type Component } from 'solid-js';
import Navbar from './components/Navbar';
import ToggleModeButton, { darkTheme } from './components/ToggleModeButton';

const App: Component<{ children: Element }> = (props) => {
  return (
    <>
      <div
        class="min-h-screen"
        classList={{
          "bg-gray-900": darkTheme() === true,
          "bg-gray-100": darkTheme() === false,
        }}
      >
        <Navbar />

        <main>
          <Suspense>{props.children}</Suspense>
        </main>

        <ToggleModeButton />
      </div>
    </>
  );
};

export default App;
