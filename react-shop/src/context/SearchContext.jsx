import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
	// Set the search state context
	const [search, setSearch] = useState("");

	const data = { search, setSearch };

	return (
		<SearchContext.Provider value={data}>{children}</SearchContext.Provider>
	);
};

export default SearchProvider;
