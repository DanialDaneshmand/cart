import { useState } from "react";
import { useProducts } from "../Context/CounterProvider";
import styles from './Navbar.module.css';

const Navbar = () => {
  const products = useProducts();
  return (
    <div className={styles.navbar}>
      <span style={{fontSize:'25px'}}>cart</span><p>{`(${products.length})`}</p>
    </div>
  );
};

export default Navbar;
