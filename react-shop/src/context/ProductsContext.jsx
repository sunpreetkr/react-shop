import { createContext, useState } from "react";


export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const data = { products, setProducts };

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;