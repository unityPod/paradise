import { createContext, useEffect, useState } from "react";
import {ProductType} from "../../type";
import URL from "../../environment";


const CardContext = createContext<ProductType[]>([]);
type Props = {
    children?: JSX.Element
}


export function CardContextProvider({children}:Props){

    const [card, setCard] = useState<ProductType[]>([]);
    const fetchProducts = async () => {
        try {
          const data = await fetch( URL + "/graphql?query={items{id title price description category image}}");
          const productsData = await data.json();
  
          setCard(productsData.data.items.map((item: ProductType) =>{
            item.id = parseInt(`${item.id}`)
            return item
          }));

        } catch (err) { }
      };

    useEffect(() =>{
        fetchProducts();
    }, [])
      
    return <CardContext.Provider value={card}>
        {children}
        </CardContext.Provider>
}

export default CardContext;