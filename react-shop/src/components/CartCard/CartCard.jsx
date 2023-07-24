import { Link } from "react-router-dom";
import styles from "./CartCard.module.scss";
import React from "react";


const CartCard = ({ item }) => {

  const { product } = item;

	return (
		<div className={styles.CartCard}>
			<Link to={`/products/${product.id}`}>
				<img
					src={product.image}
					alt={product.name}
					className={styles.CartCard__Img}
				/>
			</Link>
			<div className={styles.CartCard__Info}>
				<Link to={`/products/${product.id}`}>
					<h5>{product.name}</h5>
				</Link>
				<p className={styles.CartCard__Info_Price}>
				 Price:	{product.price} 
				</p>
        <p>
          Size: {item.size}
        </p>
        <p>
          Quantity: {item.quantity}
        </p>
			</div>
		</div>
	);
};

export default CartCard;
