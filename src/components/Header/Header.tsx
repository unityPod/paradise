import React from "react";
import { FiMenu } from "react-icons/fi";
import styles from "./Header.module.css";
import { ProductType, CartProduct } from "../../type";

type HeaderElement = {
    setIsShowCart: (input: boolean) => void, 
    cart: CartProduct[]
}

const Header: (props: HeaderElement) => any = ({setIsShowCart, cart}) => {
    return (
            <div className={styles["header-outer"]}>
                <h3 className={styles["title-h3"]}>S H O W M E</h3>
            <div className={styles["header"]}>
                <button onClick={()=>setIsShowCart(true)}><FiMenu /></button>
                <div>{cart.length > 0 && (<span className={styles["cart-items"]}>{cart.length}</span>)}</div>
            </div>
            </div>
    )
}
 export default Header;