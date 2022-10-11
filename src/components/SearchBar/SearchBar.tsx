import React, {useState, useEffect} from "react";
import styles from "./SearchBar.module.css";
import { ProductType, CartProduct } from '../../type';
import { BiX } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

type SearchBarElement = {
    products: ProductType[], 
    setFilters: (input: ProductType[]) => void
}

const SearchBar: (props: SearchBarElement) => any = ({products, setFilters}) => {
    const [filteredData, setFilteredData] = useState<ProductType[]>([]);
    const [wordEntered, setWordEntered] = useState<string>("");
  
    const handleFilter = (e: any) => {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      const newFilter = products.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
    return(
        <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search"
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className={styles["searchIcon"]}>
            {filteredData.length === 0 ? (
              <IoMdSearch />
            ) : (
              <BiX id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className={styles["dataResult"]}>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={`/${value.id}`} target="_blank">
                  <p>{value.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    )
}

export default SearchBar;