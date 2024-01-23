import { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore/lite";
import plain from "../ImageForWeb/heart.png";
import RedHeart from "../ImageForWeb/R-heart.png";
import { db } from "../firebaseConfig";
import { useLocation } from "react-router";

const ProductCard = (List_item) => {
  // console.log("List Item", List_item);
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  let path = location.pathname.slice(1);
  path = path.replace("%20", " ");
  // console.log(path);
  const handlecart = async () => {
    let isInCart = true;
    let existingQuantity = 0;
    let itemId = "";

    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      if (doc.data().title == List_item.List_item.title) {
        isInCart = false;
        existingQuantity = doc.data().quantity;
        itemId = doc.id;
        return;
      }
    });
    if (isInCart) {
      const docRef = await addDoc(collection(db, "CartData"), {
        title: `${List_item.List_item.title}`,
        image: `${List_item.List_item.image}`,
        price: `${List_item.List_item.price}`,
        quantity: 0,
      });
    } else {
      const cartItemRef = doc(db, "CartData", itemId);
      const documentRef = await updateDoc(cartItemRef, {
        quantity: existingQuantity + 1,
      });
    }
    // const querySnapshot = await getDocs(collection(db, "CartData"));
    // querySnapshot.forEach((doc) => {
    //   const data = doc.data();
    //   // const id = doc.id;
    //   console.log(doc.id, doc.data(), data.Price);
    // });
    // const coll = collection(db, "cities");
    // const snapshot = await getCountFromServer(coll);
    // console.log("count: ", snapshot.data().count);
    // console.log("Document written with ID: ", docRef.id);
  };

  const handleWhisList = async () => {
    let isInWishList = true;
    const query = await getDocs(collection(db, "WhislistData"));
    query.forEach((doc) => {
      if (doc.data().title == List_item.List_item.title) {
        isInWishList = false;
        return;
      }
    });
    if (isInWishList) {
      if (!toggle) {
        const docRef = await addDoc(collection(db, "WhislistData"), {
          title: `${List_item.List_item.title}`,
          image: `${List_item.List_item.image}`,
          price: `${List_item.List_item.price}`,
        });
        // console.log("Document written with ID: ", docRef.id);
      }
    }

    // await runTransaction(db, async (transaction) => {
    //   const sfDoc = await transaction.get(sfDocRef);
    //   if (!sfDoc.exists()) {
    //     throw "Document does not exist!";}})
    setToggle(!toggle);
  };
  return (
    <>
      <img
        style={{
          width: "35px",
          position: "absolute",
          right: "10px",
          display: "flex",
        }}
        onClick={handleWhisList}
        src={toggle ? RedHeart : plain}
        alt="Toggler"
      />
      <img
        style={{ width: "200px", height: "300px" }}
        src={`${List_item.List_item.image}`}
        alt={`${List_item.List_item.title}`}
      />
      <h1
        style={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {List_item.List_item.title}
      </h1>
      <p style={{ display: "flex", fontWeight: "900" }}>
        Price:{List_item.List_item.price}
      </p>
      {path === "cart" ? (
        <p
          style={{
            fontSize: "19px",
            width: "113px",
            marginLeft: "161px",
            border: "2px solid black",
            height: "25px",
          }}
        >
          Quantity:{List_item.List_item.quantity}
        </p>
      ) : (
        <button onClick={handlecart}>Add to Cart</button>
      )}
    </>
  );
};
export default ProductCard;
