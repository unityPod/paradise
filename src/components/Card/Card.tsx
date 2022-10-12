import CardContext from "../AuthContext/CardContext"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../type";
import { stringLength } from "@firebase/util";
import { BsXLg } from "react-icons/bs";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";


export function Card() {
    const products = useContext(CardContext);
    const { id } = useParams();
    let idNum = parseInt(id || "0");
    console.log(products)
    const product = products.find((p: ProductType) => p.id === idNum) || {
        id: "0",
        title: "Product not found",
        category: "Product not found",
        description: "Product not found",
        image: ""
    }

    return (
        <div className={styles["card-out-container"]}>
            <div className={styles["card-container"]}>
                <div className={styles["card-img-container"]}>
                    <img className={styles["card-image"]} src={product.image} />
                    <Link to="/home"><BsXLg /></Link>
                </div>
                <div className={styles["card-info"]}>
                <div className={styles["card-title"]}>{product.title}</div>
                <div className={styles["card-des"]}>{product.description}</div>
                <button className={styles["buy-button"]}>Buy Now</button>
                </div>
            </div>
        </div>
    )
};