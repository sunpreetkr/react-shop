import { useParams } from 'react-router-dom';
import SearchResult from '../containers/SearchResult/SearchResult';

const SearchResultLoader = ({ products }) => {

    const { searchTerm } = useParams();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchResult filteredProducts={filteredProducts} searchTerm={searchTerm}/>
    </div>
  );
};

export default SearchResultLoader;