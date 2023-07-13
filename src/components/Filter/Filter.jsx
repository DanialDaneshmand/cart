import { useState } from "react";
import { useProductsActions } from "../Context/CounterProvider";
import styles from "./Filter.module.css";
import Select from "react-select";
import SelectComp from "../Select/Select";
import Search from "../Search/Search";

const Filter = () => {
  const [selectedSizeOption, setSelectedSizeOption] = useState({
    value: "",
    label: "ALL",
  });
  const [selectedSortOption, setSelectedSortOption] = useState("highest");
  const dispatch = useProductsActions();
  const changeSizeHandler = (selectedOption) => {
    dispatch({ type: "filter", payload: selectedOption.value });
    dispatch({ type: "sort", payload: selectedOption.value });
    setSelectedSizeOption(selectedOption);
  };
  const changeSortHandler = (selectedOption) => {
    dispatch({ type: "sort", payload: selectedOption.value });
  };
  const sizeOptions = [
    { value: "", label: "ALL" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const sortOptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
  ];
  return (
    <div className={styles.filterBox}>
      {/* <select onChange={changeHandler}>
        <option value="">ALL</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select> */}
      <Search filterSize={selectedSizeOption} />
      <SelectComp
        defaultValue={selectedSizeOption}
        onChange={changeSizeHandler}
        options={sizeOptions}
      />
      <SelectComp
        defaultValue={selectedSortOption}
        onChange={changeSortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filter;
