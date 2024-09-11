const Searchbar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <div>
        <form action="" class="w-full max-w-md self-center">
          <div class="searchbar">
            <span class="material-symbols-outlined absolute px-2 pointer-events-none">
              search
            </span>
            <input
              type="text"
              name="search"
              placeholder="Zoek..."
              autocomplete="off"
              aria-label="Zoek"
              class="w-full placeholder-gray-400 ring-1 ring-green-600 px-2 py-1 pl-10 rounded-xl border-none focus:placeholder-gray-500 focus:ring-green-800 focus:ring-2"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
