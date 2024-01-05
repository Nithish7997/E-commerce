const Product_card = (List_item) => {
  console.log(List_item);
  return (
    <>
      <img
        style={{ width: "200px", height: "300px" }}
        src={`${List_item.List_item.image}`}
        alt=""
      />
      <h1 style={{ fontSize: "20px" }}>{List_item.List_item.title}</h1>
      <p style={{ display: "flex", fontWeight: "900" }}>
        Price:{List_item.List_item.price}
      </p>
    </>
  );
};
export default Product_card;
