import styles from "./ProductCarousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

const ProductCarousel = () => {

	

	return (
		<div className={styles.ProductCarousel}>
			<div className={styles.ProductCarousel__Overlay}></div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="../images/slider1.png"
						alt="First slide"
					/>
					<Carousel.Caption
						className={styles.ProductCarousel__Text}
						>			
						<h5>
							Shop Trousers, Denim and Shoes
						</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="../images/slider2.png"
						alt="Second slide"
					/>

					<Carousel.Caption
						className={styles.ProductCarousel__Text}
						>
						<h5>
							Shop signature Dresses, Knitwear and Jackets
						</h5>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="../images/slider3.png"
						alt="Third slide"
					/>

					<Carousel.Caption
						className={styles.ProductCarousel__Text}
						>
					
						<h5>Shop signature Designer Dresses and Bags</h5>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default ProductCarousel;
