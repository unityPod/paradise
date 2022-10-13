import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageNavScroll.module.css";
import { ProductType, CartProduct } from "../../type";
import clsx from "clsx";

const categories = [
    {
        id: 1, 
        name: 'All',
    }, 
    {
        id: 2, 
        name: "men's clothing",
    },
    {
        id: 3, 
        name: "women's clothing",
    }, 
    {
        id: 4, 
        name: 'electronics',
    }, 
    {
        id: 5, 
        name: 'jewelery',
    }, 
]

type PageNavElement = {
    activeCategory: string, 
    setActiveCategory: (input: string) => void, 
    products: ProductType[], 
    setFilters: (input: ProductType[]) => void
}

const PageNavScroll: (props: PageNavElement) => any = ({ activeCategory, setActiveCategory, products, setFilters }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (activeCategory === 'All') {
          setFilters(products);
          return;
        }
    
        const filterCategory = products.filter((item) =>
          activeCategory === 'All' ? item : item.category === activeCategory
        );
        
        setFilters(filterCategory);
      }, [activeCategory, products, setFilters]);
    return(
            <div className={styles["filter-category"]}>
                {categories.map(item=>(
                    <div key={item.id} className={styles["filter-button"]}>
                    <button  onClick={() => setActiveCategory(item.name)} key={item.id} className={clsx(styles["category-button"], `${
                        activeCategory === item.name}`)}>{item.name}</button>
                    </div>
                ))}
            </div>
    )
}

export default PageNavScroll;