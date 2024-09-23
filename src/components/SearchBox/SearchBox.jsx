import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <div className={css.container}>
      <label htmlFor="filtInp">Find contacts by name</label>
      <input type="text" id="filtInp" value={filter} onChange={handleChange} />
    </div>
  );
}
