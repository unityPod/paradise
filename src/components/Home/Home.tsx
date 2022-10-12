import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../AuthContext/AuthContext';
import CardContext from '../AuthContext/CardContext';
import { useNavigate } from 'react-router-dom';
import PageNavScroll from '../PageNavScroll/PageNavScroll';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import Product from '../Product/Product';
import styles from "./Home.module.css";
import Cart from '../Cart/Cart';
import { ProductType, CartProduct } from '../../type';
import env from 'react-dotenv';


export function Home() {
  const value = useContext(UserContext)
  const products = useContext(CardContext)
  const navigate = useNavigate();

  const [filters, setFilters] = useState<ProductType[]>(products);
  const [cart, setCart] = useState<CartProduct[]>([]);

  const [activeCategory, setActiveCategory] = useState("All");

  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    if (!value.user) {
      navigate("/")
    }
  })


  const handleAddToCart = (product: ProductType) => {

    setCart((prev: CartProduct[]) => {
      const findProductInCart = prev.find((item: CartProduct) => item.id === product.id);
      if (findProductInCart) {
        return prev.map((item: CartProduct) => item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCart((prev: CartProduct[]) => {
      return prev.reduce((cal: CartProduct[], item: CartProduct) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <div className={styles["background-img"]}>
      <div className={styles["header-container"]}>
        <Header cart={cart} setIsShowCart={setIsShowCart} />
        <SearchBar products={products} setFilters={setFilters}/>
        <PageNavScroll products={products} setFilters={setFilters} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <h1>The most stylish, popular fashion items</h1>
      </div>
      <div className={styles["products-container"]}>
        {filters.map((product: ProductType) => (
          <div key={product.id}>
            <Product handleAddToCart={handleAddToCart} key={product.id} product={product} />
          </div>
        ))}
      </div>
      {isShowCart && 
      <Cart cart={cart} 
        handleRemoveFromCart={handleRemoveFromCart}
        handleAddToCart={handleAddToCart} 
        setIsShowCart={setIsShowCart} 
        />}
    </div>
  );
}