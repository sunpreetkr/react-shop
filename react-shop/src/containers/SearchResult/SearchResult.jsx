import React, { useContext, useEffect } from 'react'
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './SearchResult.module.scss'


const SearchResult = ({ filteredProducts, searchTerm }) => {



  return (
    <section className = {styles.ProductList}>
       <div className={styles.results}>
          {filteredProducts.length > 0 ? <h5>Search results for "{searchTerm}"</h5> : <h4>No results found for "{searchTerm}"</h4>}
        </div>
       <div className={styles.ProductList__List}>
       {filteredProducts.map((product)=>(
       <ProductCard key={product.id} product = {product}/>
       ))}
 
       </div>
 
    </section>
   );
}

export default SearchResult