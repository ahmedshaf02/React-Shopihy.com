import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import "./Shop.css";
import Offers from "./Offers";
import {Consumer} from "./Context"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (isLogin) => {
    const { history } = this.props;
    if (isLogin) {
      history.push("/product");
    } else {
      alert("please login to check products");
      history.push("/login");
    }
  };

  render() {
    return (
      
        <Consumer>
          
          {
            data=>{
              const {isLogin} = data
              return(
                <>
              <Offers />
             <div>
               <p
                  style={{
                    backgroundColor: "#FBE670",
                    height: 5,
                    width: "100%",
                    margin: 0
                  }}
                />
                {/* main home page image */}
                <div
                  style={{
                    backgroundColor: "#344955",
                    textAlign: "center",
                    height: 380,
                    color: "white",
                    display: "flex",
                    margin: 0
                  }}
                >
                  <img
                    style={{ width: "100%", cursor: "pointer" }}
                    className="img-fluid"
                    src="https://product.koovs.com/home-Unisex-WebBanner-MvLQBH.webp"
                    alt="shopping"
                    onClick={()=>this.handleClick(isLogin)}
                    />
                </div>
                {/* button for categories */}
                <h5
                  style={{ height: 80, fontSize: 40, color: "#12343b" }}
                  className="text-center mt-4"
                  >
                  Choose your shopping Wear
                </h5>
                <div
                  className="container1 container text-white"
                  style={{ fontSize: 20, color: "#feda6a" }}
                  >
                  <div
                    onClick={()=>this.handleClick(isLogin)}
                    className="main"
                    style={{ fontSize: 20, color: "#feda6a", cursor: "pointer" }}
                    type="button"  data-toggle="modal" data-target="#exampleModal"
                  >
                    Men
                    
                  </div>
                  <div
                    onClick={()=>this.handleClick(isLogin)}
                    className="main1"
                    style={{ fontSize: 20, color: "#feda6a", cursor: "pointer" }}
                    >
                    Women
                  </div>
                  <div
                    onClick={()=>this.handleClick(isLogin)}
                    className="main2"
                    style={{ fontSize: 20, color: "#feda6a", cursor: "pointer" }}
                    >
                    For Both
                  </div>
                </div>
          
                <div
                  style={{
                    background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
                    height: 100,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                  >
                  <h3>Hot Summer Collection waiting for you</h3>
                  <h4>SHOP NOW OFF 60%</h4>
                </div>
                <img
                  src="https://images-static.nykaa.com/uploads/e3e73026-e770-4c9d-80d4-6ded9f1b6d16.jpg"
                  alt="offer"
                  onClick={()=>this.handleClick(isLogin)} 
                  />
          
                <div
                  style={{
                    display: "flex",
                    height: 400,
                    border: "1px solid green",
                    background: "#F7F7A9 "
                  }}
                >
                  <div>
                    <div style={{ marginLeft: 20 }}>
                      <h5 style={{ fontSize: 60, fontWeight: "bold" }}>
                        Shop Top Categories
                      </h5>
                      <h5 style={{ fontSize: 48 }}>
                        Comfort and stylish brand Watches
                      </h5>
          
                      <h5 style={{ fontSize: 40 }}>Shop Now OFF 60%</h5>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <img
                      width="100%"
                      height="400"
                      src="https://www.obaku.com/images/img_forher.jpg"
                      alt="shopping cloth"
                      onClick={()=>this.handleClick(isLogin)} 
                      />
                  </div>
                </div>
                <div
                  style={{ background: "#E4FFFD", height: 100, textAlign: "center" }}
                >
                  <img
                    src="https://adn-static1.nykaa.com/media/wysiwyg/EidBuyingGuide/gift_your_loved_once.png"
                    alt="shopping cloth"
                  />
                </div>
                <div style={{ background: "black", height: 40 }} />
                <img
                  src="https://images-static.nykaa.com/uploads/60c8616a-edf2-4671-a4e8-f1536b30f13f.jpg"
                  alt="shopping cloth"
                />
                <div style={{ background: "black", height: 40 }} />
          
                <div
                  className="row "
                  style={{
                    backgroundColor: " #1d1e22",
                    color: "#feda6a",
                    textAlign: "center"
                  }}
                  >
                  <div className="col-12 col-sm-6 col-md-6">
                    <img
                      width="100%"
                      height="400"
                      src="https://cdn.shopify.com/s/files/1/1451/0712/files/2_61347285-c820-4a5b-95c9-4cc9b141ca01_480x.jpg?v=1575017029"
                      alt="shopping cloth"
                      onClick={()=>this.handleClick(isLogin)} 
                      />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6">
                    <h5 style={{ fontSize: 60, fontWeight: "bold" }}>
                      Shop Top Categories
                    </h5>
                    <h5 style={{ fontSize: 48 }}>
                      Comfort and stylish brand Wallets{" "}
                    </h5>
          
                    <h5 style={{ fontSize: 40 }}>Shop Now OFF 60%</h5>
                  </div>
                </div>
                <div
                  style={{
                    background: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
                    height: 100,
                    textAlign: "center"
                  }}
                  >
                  <h2>Kids Party Wear Collection</h2>
                </div>
                <img
                  style={{ width: "100%" }}
                  src="https://images.squarespace-cdn.com/content/v1/5bedf26936099bf3ab730597/1570053247755-HGF4DEUX9PHIVD4RNUIM/ke17ZwdGBToddI8pDm48kEQmqQZdtGBB2XcSE0k8ACoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnP1C9UWy2cGDbKOtjxyOylFEkeYAgDhq_JLu1dhlSYITEX3T5otXmCGrMAZX_WZDoQ/SHOPPING+-+NEW+TEMPLATE+%284%29.png"
                  alt="shopping cloth"
                  onClick={()=>this.handleClick(isLogin)} 
                  />
              </div>
                </>
              )
            }
          }
          
          </Consumer>
    );
  }
}
export default Home;
