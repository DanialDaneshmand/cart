import { useState } from "react";
import { useProducts } from "../Context/CounterProvider";
import Product from "../Product/Product";
import styles from "./Product.module.css";

const ProductList = () => {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <h1>Product List</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        <h1>products cart is empty ...</h1>
      )}
    </div>
  );
};

export default ProductList;
