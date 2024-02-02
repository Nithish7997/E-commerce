import { useCartProduct } from "../Context";
import styles from "../CategoryDummy.module.css";
import plus from "./plus.png";
import minus from "./minus-circle.png";
import { getDocs } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";
import { updateDoc } from "firebase/firestore/lite";
import { doc } from "firebase/firestore/lite";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
export const CartData = () => {
  const data = useCartProduct();
  const [totalSum, setTotalSum] = useState(0);
  const [rate, setRate] = useState();
  console.log(data);
  const numberOfProducts = async () => {
    let Sum = 0;
    let rate = 0;
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      Sum += doc.data().quantity;
      rate = doc.data().quantity * doc.data().price + rate;
    });
    setTotalSum(Sum);
    setRate(rate);
  };
  console.log(totalSum);
  useEffect(() => {
    numberOfProducts();
  }, []);
  const handleIncrement = async (title) => {
    console.log("clciked");
    let existingQuantity = 0;
    let itemId = "";
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      if (doc.data().title === title) {
        existingQuantity = doc.data().quantity;
        itemId = doc.id;
        return;
      }
    });
    const cartItemRef = doc(db, "CartData", itemId);
    const documentRef = await updateDoc(cartItemRef, {
      quantity: existingQuantity + 1,
    });
  };
  const handleDecrement = async (title) => {
    console.log("clciked");
    let existingQuantity = 0;
    let itemId = "";
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      if (doc.data().title === title) {
        existingQuantity = doc.data().quantity;
        itemId = doc.id;
        return;
      }
    });
    const cartItemRef = doc(db, "CartData", itemId);
    const documentRef = await updateDoc(cartItemRef, {
      quantity: existingQuantity - 1,
    });
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "55%",
          left: "100px",
          top: "170px",
        }}
      >
        <table style={{ marginTop: "10px", border: "5px solid #81689D" }}>
          <tr>
            <th className={styles.cartHeading}>Title</th>
            <th className={styles.cartHeading}>Price</th>
            <th className={styles.cartHeading}>Qunatity</th>
          </tr>
          {data.map((item, index) => (
            <tr style={{ border: "2px solid green" }}>
              <>
                <td
                  className={styles.cartColumn}
                  key={index}
                  style={{
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.title}
                </td>
                <td className={styles.cartColumn} key={index}>
                  {item.price}
                </td>
                <td
                  className={styles.cartColumn}
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <span onClick={() => handleIncrement(item.title)}>
                    <img src={plus} alt="Plus" style={{ width: "25px" }} />
                  </span>
                  <span style={{ fontSize: "15px" }}> {item.quantity}</span>
                  <span onClick={() => handleDecrement(item.title)}>
                    <img src={minus} alt="minus" style={{ width: "25px" }} />
                  </span>
                </td>
              </>
            </tr>
          ))}
        </table>
      </div>
      <div
        style={{ position: "absolute", width: "fit-content", right: "250px" }}
      >
        <table style={{ border: "2px solid black", padding: "20px" }}>
          <tr>
            <td className={styles.cartColumn}>Order Total :</td>
            <td className={styles.cartColumn}>{rate}</td>
          </tr>
          <tr>
            <td className={styles.cartColumn}>Sales Volume :</td>
            <td className={styles.cartColumn}>{totalSum}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                style={{
                  padding: "10px",
                  marginLeft: "45px",
                  backgroundColor: "#6895D2",
                  border: "unset",
                }}
              >
                Checkout
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
