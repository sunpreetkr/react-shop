import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	// Input state to track search input
	const navigate = useNavigate();

 

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm('');    
    navigate(`/search/${searchTerm}`);
  };
	// Input changes as text is entered
	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};

	



	return (
		<form className={styles.SearchBar} onSubmit={handleSearch}>
			<input
				type="text"
				className={styles.SearchBar__Input}
				placeholder="Search for products"
				onChange={handleInput}
				required
				value={searchTerm}
			/>
			<button type="submit" onClick={handleSearch}className={styles.SearchBar__Button}>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
		</form>
	);
};

export default SearchBar;
