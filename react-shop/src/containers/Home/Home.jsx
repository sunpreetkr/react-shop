import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

import ProductsList from "../ProductsList/ProductsList";
import styles from "./Home.module.scss";
import { React } from "react";

const Home = () => {
	return (
		<div className={styles.Home}>
			<ProductCarousel />
			<h3> All Products</h3>
			<ProductsList />
		</div>
	);
};

export default Home;
