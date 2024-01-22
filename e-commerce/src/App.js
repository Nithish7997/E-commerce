import * as React from "react";
import AuthDetails from "./components/Signin/AuthDetails";
import Signin from "./components/Signin/signup";
import HomePage from "./components/homepage";
import { Routes, Route } from "react-router";
import Productprovider from "./components/Productprovider";
import GetProducts from "./components/Context";
import { getDocs } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";
import { db } from "./firebaseConfig";

function App() {
  const [cartData, setCartData] = React.useState("");
  const [wishListData, setWishListData] = React.useState("");

  const handleCartData = async () => {
    const data = [];
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      data.push(doc.data());
    });
    setCartData(data);
    return data;
  };

  const handleWishList = async () => {
    const data = [];
    const query = await getDocs(collection(db, "WhislistData"));
    query.forEach((doc) => {
      data.push(doc.data());
    });
    setWishListData(data);
    return data;
  };

  React.useEffect(() => {
    handleCartData();
    handleWishList();
  }, []);
  return (
    <>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<Productprovider cartData={cartData} />} />
        <Route
          path="/wishlist"
          element={<Productprovider wishListData={wishListData} />}
        />
        <Route path="/*" element={<Productprovider />} />
      </Routes>
    </>
  );
}

export default App;
