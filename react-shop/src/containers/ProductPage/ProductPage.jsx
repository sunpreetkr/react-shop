import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ProductPage.module.scss";
import {
	addOneToCart,
	getProductById,
	favProduct,
   getAllCart 
} from "../../services/prodcart-service";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unfilledHeart } from "@fortawesome/free-regular-svg-icons";


import  { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

const ProductPage = () => {
	const {products} = useContext(ProductsContext);
	const { setCart } = useContext(CartContext);

	const { productId } = useParams();


	const location = useLocation()
	let favourite = location.state != null ? location.state.favourite: ""

	
	const [current, setCurrent] = useState({
		product: {
			favourite: favourite === 'true' ? true: false,
		},
		color: null,
		size: null,
	});

	
	useEffect(() => {
		if (products.length > 0) {
			let p = products.find((product) => {
				return product.id == productId;
			});
			setCurrent({
				product: p,
			});
		}
	}, [products]);


	const handleSize = (e) => {
		console.log("Size selected: ", e.target.value);
		setCurrent({
			...current,
			size: e.target.value,
		})
	};


	const handleAddToCart = async () => {
    await addOneToCart(current);
		let cartItems = await getAllCart()
		console.info({
			cartItems: cartItems,
		})
    setCart(cartItems);
    setCurrent({
			product: await getProductById(current.product.id)
		});
	
  }


	const handleFav = async (isFavourite) => {
		  await favProduct(current.product.id, isFavourite);
			setCurrent({
				...current,
				product: {
					...current.product,
					favourite: isFavourite,
				}
			 });
	};

	return (
		<div className={styles.ProductPage}>
			{/* Product Image */}
			<img
				src={current.product.image}
				alt={current.product.name}
				className={styles.ProductPage__Img}
			/>
			{/* Product Info */}
			<div className={styles.ProductPage__Info}>
				<h3>
					{current.product.name} 
					{current.product.favourite ? (
						<FontAwesomeIcon
							icon={filledHeart}
							 onClick={() => {handleFav(false)}}
							className={styles.Heart}
						/>
					) : (
						<FontAwesomeIcon
							icon={unfilledHeart}
							onClick={() => {handleFav(true)}}
							className={styles.Heart}
						/>
					)}
				</h3>
				<h5>{current.product.price}.00</h5>
				<h6>Colour: {current.product.colour}</h6> 

				{/* Size Selector */}
				<label htmlFor="size">Size</label>
				<select className={styles.selector} 
					name="size"
					id="size"
					placeholder="pick a size"
					defaultValue={"none"}
					onChange={handleSize}
					required>
					<option disabled value="none">
						Pick a size...
					</option>
					{current.product.size ? (
						current.product.size.map((s, index) => {
							return (
								<option key={index} value={s}>
									{s}
								</option>
							);
						})
					) : (
						<></>
					)}
				</select>

			
				<button className={styles.ProductPage__Btn}
				onClick={handleAddToCart}
				disabled={
					current.size === "none" ||
					!current.size
				}>Add to Cart

				</button>
			
			</div>
		</div>
	);
};

export default ProductPage;
