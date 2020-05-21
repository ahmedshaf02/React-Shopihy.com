import React from "react";
import OrderPlace from "./OrderPlace";
import { Consumer } from "./Context";

const Cart = props => {
  const {history } = props;
  // console.log(props)

  const handleOrder = (value, addToOrder, removeCartArr) => {
    addToOrder(value);
    removeCartArr(value);

    history.push("/orderPlace");
  };

  
  const removeCart = (value, removeCartArr) => {
    removeCartArr(value);
  };
  
  return (
    <Consumer>
      {context => {
        const { addToOrder, removeCartArr,cartArr } = context;
        
            if (cartArr.length === 0) {
              return (
                <div className="text-center">
                  <h1 style={{}}> Your Cart list is empty</h1>
                  <img
                    src="https://www.razencustoms.com/includes/img/empty-cart.png"
                    alt="cart bag"
                  />
                </div>
              );
            }
        return (
          <>
            <h2 className="text-center">Your Cart List</h2>

            {cartArr &&
              cartArr.map(ele => (
                <div key={ele.id} className="mb-2">
                  <div
                    style={{
                      width: "60%",
                      height: 300,
                      border: "1px solid lightgray",
                      backgroundColor: "white",
                      borderRadius: 4,
                      boxSizing: "border-box",
                      margin: "0 auto"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start"
                      }}
                    >
                      <div>
                        <img
                          className="ml-3 mt-3"
                          src={ele.imgUrl}
                          width="180"
                          height="180"
                          alt="shopping cloth"
                        />
                      </div>
                      <div style={{ margin: 10 }}>
                        <h5
                          style={{
                            alignItems: "self-start",
                            fontWeight: "bold"
                          }}
                        >
                          {ele.brandName}
                        </h5>
                        <h6 style={{ alignItems: "self-start" }}>
                          {ele.clothName}
                        </h6>
                        <h6
                          style={{ alignItems: "self-start", color: "#B6B8BD" }}
                        >
                          SOLD BY: Shopihy.com
                        </h6>
                      </div>
                      <div
                        style={{ marginLeft: 100, marginTop: 10, width: 200 }}
                      >
                        <span style={{ alignItems: "self-start" }}>
                          Rs. {ele.price}/-
                        </span>
                        <h6 style={{ color: "#B6B8BD" }}>
                          {" "}
                          <del>Rs. {ele.cutPrice}/-</del>{" "}
                          <span style={{ color: "tomato" }}>{ele.offer}</span>
                        </h6>

                        <button
                          onClick={() => removeCart(ele.id, removeCartArr)}
                          className="mt-4"
                          style={{
                            backgroundColor: "#1d1e22",
                            color: "#feda6a",
                            padding: 4
                          }}
                        >
                          Remove cart
                        </button>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <button
                        onClick={() =>
                          handleOrder(ele.id, addToOrder, removeCartArr, cartArr)
                        }
                        className="cartButtonRemove"
                      >
                        PLACE ORDER
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </>
        );
      }}
    </Consumer>
  );
};

export default Cart;
