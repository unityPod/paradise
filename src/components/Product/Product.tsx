import React, {useContext} from "react";
import styles from "./Product.module.css";
import {ProductType} from "../../type";
import { Link } from "react-router-dom";

type ProductElement = {
    product: ProductType, 
    handleAddToCart: (product: ProductType) => void
};

function Product({product, handleAddToCart}: ProductElement){
    const DollarUsd = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    return(
      <div className={styles["product-container"]}>
        <Link to={`/product/${product.id}`}> 
        <img className={styles["product-img"]} src={product.image} alt={product.title}/>
        </Link>
        <h3 className={styles["product-title"]}>{product.title}</h3>
        <span className={styles["product-price"]}>{DollarUsd.format(product.price)}</span>
        <button onClick={() => handleAddToCart(product)} className={styles["buy-button"]}>Buy Now</button>
      </div>
    )
}

export default Product; 