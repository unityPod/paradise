import CardContext from "../AuthContext/CardContext"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../type";
import { stringLength } from "@firebase/util";


export function Card(){
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

    return(
        <div><img src={product.image}/>{product.title}</div>
    )
};