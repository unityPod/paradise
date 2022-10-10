import React from "react";
import styles from "./Cart.module.css";
import {
    AiOutlinePlusSquare, 
    AiOutlineMinusSquare, 
} from 'react-icons/ai';

const Cart = ({ setIsShowCart, cart, handleAddToCart, handleRemoveFromCart }) => {
    const DollarUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    const total = (arr) => {
        return arr.reduce((cal, item) => {
            return cal + item.price * item.amount;
        }, 0)
    }
    return (
        <div className={styles["cart-container"]} onClick={() => setIsShowCart(false)}>
            <div onClick={(e) => e.stopPropagation()} className={styles["cart-inner"]}>
                <div className={styles["cart-object"]}>
                    {cart.map(item => (
                        <div className={styles["cart-item"]} key={item.id}>
                            <img className={styles["cart-img"]} src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.amount}</p>
                            <div className={styles["cart-button"]}>
                                <button onClick={()=> handleRemoveFromCart(item.id)}><AiOutlineMinusSquare /></button>
                                <span>{DollarUsd.format(item.price)}</span>
                                <button onClick={()=> handleAddToCart(item)}><AiOutlinePlusSquare /></button>
                            </div>
                        </div>
                    ))}
                    <p>Total: {DollarUsd.format(total(cart))}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart; 