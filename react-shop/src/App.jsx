import { Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./containers/NavBar/NavBar";
import SearchProvider from "./context/SearchContext";
import Footer from "./components/Footer";
import ProductsProvider from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

function App() {

	const [products, setProducts] = useState([]);


	const [cart, setCart] = useState([]);


	return (
		<CartProvider>
		<ProductsProvider>
		<SearchProvider>
			<NavBar />
			<div className={styles.App__Content}>
				<Outlet context={[products, setProducts, cart, setCart]} />
			</div>
			<Footer />
		</SearchProvider>
		</ProductsProvider>
		</CartProvider>
	);
}

export default App;


