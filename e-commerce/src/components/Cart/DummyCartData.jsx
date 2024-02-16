import styles from "../CategoryDummy.module.css";
import plus from "./plus.png";
import minus from "./minus-circle.png";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

export const DummyCartData = () => {
  const [totalSum, setTotalSum] = useState("");
  const [rate, setRate] = useState("");
  const [cartQuantity, setCartQuantity] = useState(
    JSON.parse(localStorage.getItem("Cartkey"))
  );
  const dataload = JSON.parse(localStorage.getItem("Cartkey"));
  console.log(dataload);
  const handleTotalSum = () => {
    let sum = 0;
    let cost = 0;
    dataload.forEach((data) => {
      sum = sum + data.quantity;
      cost = cost + data.price * data.quantity;
    });
    setTotalSum(sum);
    setRate(cost);
    localStorage.setItem("Cartkey", JSON.stringify(dataload));
    setCartQuantity(dataload);
  };
  const handleIncrement = (title) => {
    let cost = 0;
    dataload.forEach((data) => {
      if (data.title === title) {
        data.quantity += 1;
        // console.log(data);
      }
    });
    localStorage.setItem("Cartkey", JSON.stringify(dataload));
    setCartQuantity(dataload);
  };
  const handleDecrement = (title) => {
    dataload.forEach((data) => {
      if (data.title === title) {
        data.quantity -= 1;
        // console.log(data);
      }
    });
    localStorage.setItem("Cartkey", JSON.stringify(dataload));
    setCartQuantity(dataload);
  };
  useEffect(() => {
    handleTotalSum();
  }, [cartQuantity]);
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
          {cartQuantity.map((item, index) => (
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
