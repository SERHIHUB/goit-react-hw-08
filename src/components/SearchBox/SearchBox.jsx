import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectValueFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();

  const filteredName = useSelector(selectValueFilter);

  return (
    <div className={css.searchContainer}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="search"
        type="text"
        value={filteredName}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}

export default SearchBox;
