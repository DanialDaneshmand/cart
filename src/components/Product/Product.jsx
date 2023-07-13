import { useState } from "react";
import styles from "./product.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { useProductsActions } from "../Context/CounterProvider";
const Product = ({ product }) => {
  const [inputValue, setInputValue] = useState(product.name);
  // const changeHandler = (e) => {
  //   setInputValue(e.target.value);
  //   onUpdate(product.id, e.target.value);
  // };
  const dispatch = useProductsActions();
  return (
    <div className={styles.productContainer}>
      <div className={styles.productPrice}>
      <p>product name:{product.description}</p>
      </div>
      <p>price :{product.price}$</p>
      <p className={styles.count}>{product.count}</p>
      {/* <input type="text" value={inputValue} onChange={changeHandler} /> */}
      <div className={styles.btnsBox}>
        <button
          onClick={() => dispatch({ type: "increment", payload: product.id })}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", payload: product.id })}
          className={`${product.count <= 1 && styles.remove}`}
        >
          {product.count > 1 ? "-" : <FaTrashAlt />}
        </button>
        <button
          onClick={() => dispatch({ type: "remove", payload: product.id })}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
