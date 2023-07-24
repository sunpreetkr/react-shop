import React, { useContext, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './ProductsList.module.scss'
import { ProductsContext } from '../../context/ProductsContext'
import { getProducts } from '../../services/prodcart-service'
const ProductsList = () => {
  const {products, setProducts} = useContext(ProductsContext);

  useEffect(() => {
     getProducts().then(setProducts);
  },[]);
  return (
   <section className = {styles.ProductList}>
      <div className={styles.ProductList__List}>
      {products.map((product)=>(
      <ProductCard key={product.id} product = {product}/>
      ))}

      </div>

   </section>
  );
}
export default ProductsList
	