import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import PageNavScroll from '../PageNavScroll/PageNavScroll';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import Product from '../Product/Product.jsx';
import styles from "./Home.module.css";
import Cart from '../Cart/Cart';

export function Home() {
  const value = useContext(UserContext)
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [cart, setCart] = useState([])

  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    if (!value.user) {
      navigate("/")
    }
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products/');
        const products = await data.json();

        setProducts(products);
        setFilters(products);
      } catch (err) { }
    };

    fetchProducts();
  }, [])

  const handleAddToCart = product => {
    setCart(prev => {
      const findProductInCart = prev.find(item => item.id === product.id);
      if (findProductInCart) {
        return prev.map(item => item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
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
        <SearchBar />
        <PageNavScroll />
        <h1>The Most Popular Jacket Today</h1>
      </div>
      <div className={styles["products-container"]}>
        {products.map(product => (
          <div>
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