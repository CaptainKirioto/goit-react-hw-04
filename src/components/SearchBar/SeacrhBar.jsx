import s from "./SearchBar.module.css";

const SeacrhBar = ({ onSubmit }) => {
  return (
    <header>
      <form>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button onClick={onSubmit} className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SeacrhBar;
