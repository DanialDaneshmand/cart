import { useState } from "react";
import { useProductsActions } from "../Context/CounterProvider";
import styles from "./Search.module.css";

const Search = ({ filterSize }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useProductsActions();
  const changeHandler = (e) => {
    dispatch({ type: "filter", payload: filterSize.value });
    dispatch({ type: "search", payload: e });
    setInputValue(e.target.value);
  };
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        placeholder="searching ..."
        onChange={changeHandler}
        value={inputValue}
      />
    </div>
  );
};

export default Search;
