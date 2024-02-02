import React, { useContext } from "react";
import { getDocs } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
import { createContext, useEffect, useState } from "react";

const cartProduct = createContext();
const HandleCartData = ({ children }) => {
  const [cartData, setCartData] = useState();
  const data = [];
  const fetchCartData = async () => {
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      data.push(doc.data());
    });
    setCartData(data);
  };
  console.log(cartData);
  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <cartProduct.Provider value={cartData}>{children}</cartProduct.Provider>
  );
};
export function useCartProduct() {
  const context = useContext(cartProduct);
  return context;
}
export default HandleCartData;
