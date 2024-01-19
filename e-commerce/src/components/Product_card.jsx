import { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import plain from "../ImageForWeb/heart.png";
import RedHeart from "../ImageForWeb/R-heart.png";
import { db } from "../firebaseConfig";
// import { runTransaction } from "firebase/firestore";

const ProductCard = (List_item) => {
  const [toggle, setToggle] = useState(false);

  const handlecart = async () => {
    const docRef = await addDoc(collection(db, "CartData"), {
      Title: `${List_item.List_item.title}`,
      Image: `${List_item.List_item.image}`,
      Price: `${List_item.List_item.price}`,
      Qunatity: 0,
    });
    // const querySnapshot = await getDocs(collection(db, "CartData"));
    // querySnapshot.forEach((doc) => {
    //   const data = doc.data();
    //   // const id = doc.id;
    //   console.log(doc.id, doc.data(), data.Price);
    // });
    // const coll = collection(db, "cities");
    // const snapshot = await getCountFromServer(coll);
    // console.log("count: ", snapshot.data().count);
    console.log("Document written with ID: ", docRef.id);
  };

  const handleWhisList = async () => {
    if (!toggle) {
      const docRef = await addDoc(collection(db, "WhislistData"), {
        Title: `${List_item.List_item.title}`,
        Image: `${List_item.List_item.image}`,
        Price: `${List_item.List_item.price}`,
      });
      console.log("Document written with ID: ", docRef.id);
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
      <button onClick={handlecart}>Add to Cart</button>
    </>
  );
};
export default ProductCard;
