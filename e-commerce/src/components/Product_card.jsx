const ProductCard = (List_item) => {
  const [toggle, setToggle] = false;
  const handleToggle = () => {
    setToggle(true);
  };
  return (
    <>
      {toggle ? (
        <button onClick={handleToggle}>
          <image></image>
        </button>
      ) : (
        <button>
          <image></image>
        </button>
      )}
      <img
        style={{ width: "200px", height: "300px" }}
        src={`${List_item.List_item.image}`}
        alt=""
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
      <button>Add to Cart</button>
    </>
  );
};
export default ProductCard;
