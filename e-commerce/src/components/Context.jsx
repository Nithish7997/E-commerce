import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router";

const ProductProvider = createContext();

const GetProducts = () => {
  const location = useLocation();
  const [product, setProduct] = useState();
  let path = location.pathname.slice(1);
  path = path.replace("%20", " ");
  const get_data = async () => {
    await fetch(`https://fakestoreapi.com/products/category/${path}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    get_data();
  }, []);
  console.log(product);
  return (
    <ProductProvider.Provider value={product}>
      {Children}
    </ProductProvider.Provider>
  );
};
const useProduct = () => {
  const content = useContext(ProductProvider);
};

export default GetProducts;
