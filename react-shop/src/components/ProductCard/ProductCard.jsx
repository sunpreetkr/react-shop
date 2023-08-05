import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unfilledHeart } from "@fortawesome/free-regular-svg-icons";
import { favProduct, getProducts } from "../../services/prodcart-service";
import { Card } from "react-bootstrap";
import { ProductsContext } from '../../context/ProductsContext'

const ProductCard = ({ product }) => {
	const {setProducts} = useContext(ProductsContext);


	const {image, name, price} = product;
 
	const handleFav = async () => {
		await favProduct(product.id, !product.favourite);
		let products = await getProducts()
		setProducts(products);
		console.log('fav updated in product card')
	};

	return (
		<Card className={styles.ProductCard}>
			<div className={styles.ProductCard__Img_Container}>
	
				<Link to={`/products/${product.id}`} state={{ favourite: product.favourite.toString() }}>
					<Card.Img
						variant="top"
						src={image}
						className={styles.ProductCard__Img_Container_Thumb}
					/>
				</Link>
	
				{product.favourite ? (
					<FontAwesomeIcon
						icon={filledHeart}
						onClick={handleFav}
						className={styles.ProductCard__Img_Container_Heart}
					/>
				) : (
					<FontAwesomeIcon
						icon={unfilledHeart}
						onClick={handleFav}
						className={styles.ProductCard__Img_Container_Heart}
					/>
				)}
			</div>
			<Card.Body className={styles.ProductCard__Info}>
				<Link to={`/products/${product.id}`}>
					<Card.Title>{name}</Card.Title>
				</Link>
				<Link to={`/products/${product.id}`}>
					<Card.Text>${price}</Card.Text>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
