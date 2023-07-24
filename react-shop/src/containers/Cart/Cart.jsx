import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.scss";
import CartCard from "./../../components/CartCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
	const { cart } = useContext(CartContext);
	

	return (
		<div className={styles.Cart}>
			<h3 className={styles.Cart__Heading}>Cart Items</h3>
			{!cart.length ? (
				<p>Your cart is empty. Get shopping!</p>
			) : (
				cart.map((item, index) => {
					return <CartCard key={index} item={item} />;
				})
			)}
		</div>
	);
};

export default Cart;
