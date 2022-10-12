import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import PageNavScroll from '../PageNavScroll/PageNavScroll';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import Product from '../Product/Product';
import styles from "./Home.module.css";
import Cart from '../Cart/Cart';
import { ProductType, CartProduct } from '../../type';


export function Home() {
  const value = useContext(UserContext)
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartProduct[]>([]);

  const [activeCategory, setActiveCategory] = useState("All");

  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    if (!value.user) {
      navigate("/")
    }
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("https://paradise-server.herokuapp.com/graphql?query={items{id title price description category image}}");
        const products = await data.json();

        setProducts(products.data.items);
        setFilters(products.data.items);
      } catch (err) { }
    };

    fetchProducts();
  }, [])

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
      <div>Hello World</div>
      <div className={styles["header-container"]}>
        <Header cart={cart} setIsShowCart={setIsShowCart} />
        <SearchBar products={products} setFilters={setFilters}/>
        <PageNavScroll products={products} setFilters={setFilters} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <h1>The Most Popular Jacket Today</h1>
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