const Searchbar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <form action="" class="searchbar">
        <span class="material-symbols-outlined absolute px-2 pointer-events-none">
          search
        </span>
        <input
          type="text"
          name="search"
          placeholder="Zoek..."
          autocomplete="off"
          aria-label="Zoek"
          class="input-field"
        />
      </form>
    </>
  );
};

export default Searchbar;
