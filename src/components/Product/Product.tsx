import React from "react";
import styles from "./Product.module.css";
import {ProductType} from "../../type";

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
        <img className={styles["product-img"]} src={product.image} alt={product.title}/>
        <h3>{product.title}</h3>
        <span>{DollarUsd.format(product.price)}</span>
        <button onClick={() => handleAddToCart(product)} className={styles["buy-button"]}>Buy Now</button>
      </div>
    )
}

export default Product; 