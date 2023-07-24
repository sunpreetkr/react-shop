import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
	const { search, setSearch } = useContext(SearchContext);

	// Reset search term on page change
	const handleReset = () => {
		setSearch("");
	};

	return (
		<Navbar bg="dark" expand="md">
			<Container fluid className={styles.NavBar}>
			<h4>Shopfinity</h4>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" color="white" />
				<Navbar.Collapse 
					id="navbarScroll"
					className={styles.NavBar__List}>
					<Nav
						justify="true"
						className={styles.NavBar__List_Links + " ms-auto"}>
						<Link to="/" onClick={handleReset}>
							Home
						</Link>
						<Link to="/cart" onClick={handleReset}>
							Cart
						</Link>
					</Nav>
					<SearchBar />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
