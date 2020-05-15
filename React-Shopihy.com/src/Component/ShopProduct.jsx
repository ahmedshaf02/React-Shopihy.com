import React from "react";

const ShopProduct = props => {
  const { data, match, history, addToCart } = props;
  console.log(props);
  // const value = match.param.id
  console.log(data);

  const value = data.find(ele => ele.id === match.params.id);

  const handleAddToCart = () => {
    addToCart(value,history);
    history.push("/cart");
  };

  if (!value) {
    return (
      <div>
        <h1>Product Not Found!</h1>;
        <img
          src="data:image/jpeg;base64,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"
          alt="product not found"
        />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-12  col-md-6 text-right ">
            {/* <img src={value.imgUrl} alt={value.name} /> */}
            <img src={value.imgUrl} width="300" alt="shopping cloth" />
          </div>
          <div className="col-12 col-md-6 text-left">
            <h3 style={{ fontWeight: "bold", letterSpacing: 0.5 }}>
              {value.brandName}
            </h3>
            <h5 style={{ color: "#B6B8BD " }}>{value.clothName}</h5>
            <h3 style={{}}>
              Price : Rs. {value.price}/- 
              <del style={{ color: "#898C95", fontSize: 18,marginLeft:2 }}>
                Rs. {value.cutPrice}/-
              </del>
              <span
                style={{ color: "tomato", fontSize: 18, fontWeight: "bold",marginLeft:2 }}
              >
                {value.offer}
              </span>
            </h3>
            <small>Inclusive of all taxes</small>
            <h4 style={{ fontWeight: "bold", marginTop: 20 }}>Size</h4>
            <div className="mt-4">
              <span
                className="shopSize"
                style={{
                  border: "1.5px solid gray",
                  padding: "8px 12px",
                  borderRadius: "50%",
                  margin: 10
                }}
              >
                S
              </span>
              <span
                className="shopSize"
                style={{
                  border: "1.5px solid gray",
                  padding: "8px 10px",
                  borderRadius: "50%",
                  margin: 10
                }}
              >
                M
              </span>
              <span
                className="shopSize"
                style={{
                  border: "1.5px solid gray",
                  padding: "8px 12px",
                  borderRadius: "50%",
                  margin: 10
                }}
              >
                L
              </span>
              <span
                className="shopSize"
                style={{
                  border: "1.5px solid gray",
                  padding: "8px 12px",
                  borderRadius: "50%",
                  margin: 10
                }}
              >
                xl
              </span>
            </div>
            <h4 style={{ fontWeight: "bold", marginTop: 30 }}>
              Delivery Option
            </h4>
            <h6 style={{ marginTop: 20 }}>Cash on delivery/ card</h6>
            <button className="cartButton mt-4" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProduct;
