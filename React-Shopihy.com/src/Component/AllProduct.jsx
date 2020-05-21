import React,{createContext} from "react";
import { Link, Redirect, Route } from "react-router-dom";
import ShopProduct from "./ShopProduct";
import { Consumer } from "./Context";
import {productKids,productMen,productWallet,productWatch,productWomen,productWomen2} from "../Data/productData"

export const DataContext = createContext()

export default class AllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sort: "all",
      order: "="
    };
  }
  // for perticular product array
  handleProduct = productArr => {
    this.setState({
      data: productArr
    })
  };

  // for filter and sort
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { match } = this.props;
    const { data, order, sort } = this.state;
    // console.log(this.props)
    return (

      <DataContext.Provider value={this.state.data}>
        <Consumer>
          {value => {
            const { isLogin } = value;
  
            if (!isLogin) {
              return <Redirect to="/login" />;
            }
            return (
              <>
                {/* mens clothing */}
                <div
                  style={{
                    height: 160,
                    background: "#12343b",
                    color: "#c89666",
                    textAlign: "center"
                  }}
                >
                  <h1 style={{ fontWeight: "bold" }}>
                    Our Shop is Open for you Now!
                  </h1>
                  <h5>Shop Top Categories</h5>
  
                  <h5>Mens exclusive wear and top trends</h5>
                </div>
  
                <div
                  style={{
                    height: 100,
                    background: "#12343b",
                    color: "#c89666",
                    textAlign: "center"
                  }}
                >
                  <h4>Filters :</h4>
                  {/* filter by high to low */}
                  <span style={{ margin: 5 }}>Sort by:</span>
  
                  <select
                    name="sort"
                    value={this.state.sort}
                    onChange={this.handleChange}
                    style={{
                      backgroundColor: "#12343b",
                      color: "#c89666",
                      padding: 10,
                      borderRadius: 4
                    }}
                  >
                    <option value="all">all product</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  </select>
  
                  {/* filter by price */}
                  <span style={{ margin: 5 }}>Order by:</span>
  
                  <select
                    name="order"
                    value={this.state.order}
                    onChange={this.handleChange}
                    style={{
                      backgroundColor: "#12343b",
                      color: "#c89666",
                      padding: 10,
                      borderRadius: 4
                    }}
                  >
                    <option value="=">all product</option>
                    <option value=">">Above 1000</option>
                    <option value="<">Below 1000</option>
                  </select>
                </div>
                <div className="row text-center">
                  {productMen &&
                    productMen
                      .filter(ele => {
                        if (order === ">") {
                          return ele.price > 1000;
                        } else if (order === "<") {
                          return ele.price < 1000;
                        } else {
                          return true;
                        }
                      })
                      .sort((a, b) => {
                        if (sort === "asc") {
                          return a.price - b.price;
                        } else if (sort === "desc") {
                          return b.price - a.price;
                        } else {
                          return true;
                        }
                      })
                      .map(ele => (
                        <div
                          key={ele.id}
                          className="col-6 offset-3 offset-sm-0 col-sm-6 col-md-6 col-lg-4 mt-4 "
                        >
                          <Link
                            onClick={() => this.handleProduct(productMen)}
                            to={`${match.url}/${ele.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card " style={{width: "18rem"}}>
                            <img 
                            width="300"
                            src={ele.imgUrl}
                            alt="shopping cloth"
                            className="card-img-top"/ >
                            <div className="card-body">
                              <h6  className="card-text" style={{ fontWeight: "bold", marginTop: 5 }}>{ele.brandName}</h6>
                              <h6  className="card-text">{ele.clothName}</h6>
                              <h6 className="card-text">Rs. {ele.price}</h6>
                            </div>
                        </div>
                          </Link>
                          </div>
                      ))}
                </div>
                {/* product girl clothing */}
                <div
                  style={{
                    height: "200px",
                    background: " #1d1e22",
                    color: "#feda6a",
                    textAlign: "center",
                    marginTop:20
                  }}
                >
                  <div>
                    <h5 style={{ fontSize: 48, fontWeight: "bold" }}>
                      Shop Top Categories
                    </h5>
                    <h5 style={{ fontSize: 38, fontWeight: "bold" }}>
                      Woman classic trendy wear
                    </h5>
                    <h5>Shop Now OFF 60%</h5>
                  </div>
                </div>
                <div>
                  <img
                    width="100%"
                    height="400"
                    src="https://images-static.nykaa.com/uploads/e3e73026-e770-4c9d-80d4-6ded9f1b6d16.jpg"
                    alt="shopping cloth"
                  />
                </div>
  
                <div className="row text-center">
                  {productWomen &&
                    productWomen
                      .filter(ele => {
                        if (order === ">") {
                          return ele.price > 1000;
                        } else if (order === "<") {
                          return ele.price < 1000;
                        } else {
                          return true;
                        }
                      })
                      .sort((a, b) => {
                        if (sort === "asc") {
                          return a.price - b.price;
                        } else if (sort === "desc") {
                          return b.price - a.price;
                        } else {
                          return true;
                        }
                      })
                      .map(ele => (
                        <div
                          key={ele.id}
                          className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                        >
                          <Link
                            onClick={() => this.handleProduct(productWomen)}
                            to={`${match.url}/${ele.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card " style={{width: "18rem"}}>
                            <img 
                            width="300"
                            src={ele.imgUrl}
                            alt="shopping cloth"
                            className="card-img-top"/ >
                            <div className="card-body">
                              <h6  className="card-text" style={{ fontWeight: "bold", marginTop: 5 }}>{ele.brandName}</h6>
                              <h6  className="card-text">{ele.clothName}</h6>
                              <h6 className="card-text">Rs. {ele.price}</h6>
                            </div>
                        </div>
                          </Link>
                        </div>
                      ))}
                </div>
                {/* product girl summer collection */}
                <div
                  style={{
                    height: "200px",
                    background: "#161748",
                    color: "#f95d9b",
                    textAlign: "center"
                  }}
                >
                  <div>
                    <h5 style={{ fontSize: 48, fontWeight: "bold" }}>
                      Shop Top Categories
                    </h5>
                    <h5 style={{ fontSize: 38, fontWeight: "bold" }}>
                      Girls Winter collection top trends
                    </h5>
                    <h5>Shop Now OFF 60%</h5>
                  </div>
                </div>
                <div>
                  <img
                    width="100%"
                    height="500"
                    src="https://www.forever21.com/images/f21/us/en/web/20200407/0507_COMMDEALS_D_M_1_233553_f21.jpg?1"
                    alt="shopping cloth"
                  />
                </div>
                <div className="row text-center">
                  {productWomen2 &&
                    productWomen2
                      .filter(ele => {
                        if (order === ">") {
                          return ele.price > 1000;
                        } else if (order === "<") {
                          return ele.price < 1000;
                        } else {
                          return true;
                        }
                      })
                      .sort((a, b) => {
                        if (sort === "asc") {
                          return a.price - b.price;
                        } else if (sort === "desc") {
                          return b.price - a.price;
                        } else {
                          return true;
                        }
                      })
                      .map(ele => (
                        <div
                          key={ele.id}
                          className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                        >
                          <Link
                            onClick={() => this.handleProduct(productWomen2)}
                            to={`${match.url}/${ele.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card " style={{width: "18rem"}}>
                            <img 
                            width="300"
                            src={ele.imgUrl}
                            alt="shopping cloth"
                            className="card-img-top"/ >
                            <div className="card-body">
                              <h6  className="card-text" style={{ fontWeight: "bold", marginTop: 5 }}>{ele.brandName}</h6>
                              <h6  className="card-text">{ele.clothName}</h6>
                              <h6 className="card-text">Rs. {ele.price}</h6>
                            </div>
                        </div>
                          </Link>
                        </div>
                      ))}
                </div>
                {/* product Kids wear */}
                <div
                  style={{
                    height: "200px",
                    background:
                      "radial-gradient(circle, rgba(63,94,251,1) 22%, rgba(252,70,107,1) 100%)",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  <div>
                    <h5 style={{ fontSize: 38, fontWeight: "bold" }}>
                      Shop Top Categories
                    </h5>
                    <h5 style={{ fontSize: 28, fontWeight: "bold" }}>
                      Kids party and casual wear
                    </h5>
                    <h5>Shop Now OFF 40%</h5>
                  </div>
                </div>
  
                <div className="row text-center">
                  {productKids &&
                    productKids
                      .filter(ele => {
                        if (order === ">") {
                          return ele.price > 1000;
                        } else if (order === "<") {
                          return ele.price < 1000;
                        } else {
                          return true;
                        }
                      })
                      .sort((a, b) => {
                        if (sort === "asc") {
                          return a.price - b.price;
                        } else if (sort === "desc") {
                          return b.price - a.price;
                        } else {
                          return true;
                        }
                      })
                      .map(ele => (
                        <div
                          key={ele.id}
                          className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                        >
                          <Link
                            onClick={() => this.handleProduct(productKids)}
                            to={`${match.url}/${ele.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card " style={{width: "18rem"}}>
                            <img 
                            width="300"
                            src={ele.imgUrl}
                            alt="shopping cloth"
                            className="card-img-top"/ >
                            <div className="card-body">
                              <h6  className="card-text" style={{ fontWeight: "bold", marginTop: 5 }}>{ele.brandName}</h6>
                              <h6  className="card-text">{ele.clothName}</h6>
                              <h6 className="card-text">Rs. {ele.price}</h6>
                            </div>
                        </div>
                          </Link>
                        </div>
                      ))}
                </div>
                {/* product Watch */}
                <div
                  className="row mt-4"
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
                      src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/23450/211897/OLEVS-Rose-Gold-Watch-Women-Japan-Quartz-Watches-Ladies-Top-Brand-Luxury-Female-Wrist-Watch-Girl__46319.1548240480.jpg?c=2?imbypass=on"
                      alt="shopping cloth"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6">
                    <h5 style={{ fontSize: 60, fontWeight: "bold" }}>
                      Shop Top Categories
                    </h5>
                    <h5 style={{ fontSize: 48 }}>
                      Comfort and stylish brand Watches{" "}
                    </h5>
  
                    <h5 style={{ fontSize: 40 }}>Shop Now OFF 60%</h5>
                  </div>
                </div>
                <h5>Famous brand Watch collection</h5>
  
                <div className="row text-center">
                  {productWatch &&
                    productWatch
                      .filter(ele => {
                        if (order === ">") {
                          return ele.price > 1000;
                        } else if (order === "<") {
                          return ele.price < 1000;
                        } else {
                          return true;
                        }
                      })
                      .sort((a, b) => {
                        if (sort === "asc") {
                          return a.price - b.price;
                        } else if (sort === "desc") {
                          return b.price - a.price;
                        } else {
                          return true;
                        }
                      })
                      .map(ele => (
                        <div
                          key={ele.id}
                          className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                        >
                          <Link
                            onClick={() => this.handleProduct(productWatch)}
                            to={`${match.url}/${ele.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card " style={{width: "18rem"}}>
                            <img 
                            width="300"
                            src={ele.imgUrl}
                            alt="shopping cloth"
                            className="card-img-top"/ >
                            <div className="card-body">
                              <h6  className="card-text" style={{ fontWeight: "bold", marginTop: 5 }}>{ele.brandName}</h6>
                              <h6  className="card-text">{ele.clothName}</h6>
                              <h6 className="card-text">Rs. {ele.price}</h6>
                            </div>
                        </div>
                          </Link>
                        </div>
                      ))}
                </div>
                {/* Wallet header  */}
  
                <div
                  className="row mt-4"
                  style={{
                    backgroundColor: "#2e3830",
                    color: "#c53211",
                    textAlign: "center"
                  
                  }}
                >
                  <div className="col-12 col-sm-6 col-md-6">
                    <h5
                      style={{ fontSize: 60, fontWeight: "bold", marginTop: 10 }}
                    >
                      Shop Top Categories
                    </h5>
                    <h5 style={{ fontSize: 40, fontWeight: "bold" }}>
                      Comfort and stylish brand Wallet{" "}
                    </h5>
  
                    <h5 style={{ fontSize: 28, fontWeight: "bold" }}>
                      Shop Now OFF 45%
                    </h5>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6">
                    <img
                      width="100%"
                      height="400"
                      src="https://cdn.shopify.com/s/files/1/1451/0712/files/2_61347285-c820-4a5b-95c9-4cc9b141ca01_480x.jpg?v=1575017029"
                      alt="shopping cloth"
                    />
                  </div>
                </div>
  
                <div className="row text-center">
                  {productWallet &&
                    productWallet
                      .filter(ele => {
                        if (order === ">") {
                          return ele.price > 1000;
                        } else if (order === "<") {
                          return ele.price < 1000;
                        } else {
                          return true;
                        }
                      })
                      .sort((a, b) => {
                        if (sort === "asc") {
                          return a.price - b.price;
                        } else if (sort === "desc") {
                          return b.price - a.price;
                        } else {
                          return true;
                        }
                      })
                      .map(ele => (
                        <div
                          key={ele.id}
                          className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                        >
                          <Link
                            onClick={() => this.handleProduct(productWallet)}
                            to={`${match.url}/${ele.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="card " style={{width: "18rem"}}>
                            <img 
                            width="300"
                            src={ele.imgUrl}
                            alt="shopping cloth"
                            className="card-img-top"/ >
                            <div className="card-body">
                              <h6  className="card-text" style={{ fontWeight: "bold", marginTop: 5 }}>{ele.brandName}</h6>
                              <h6  className="card-text">{ele.clothName}</h6>
                              <h6 className="card-text">Rs. {ele.price}</h6>
                            </div>
                        </div>
                          </Link>
                        </div>
                      ))}
                </div>
                <Route
                
                  path="/product/:id"
                  render={(props) => <ShopProduct {...props} data={data} />}
                
                />
              </>
            );
          }}
        </Consumer>
        </DataContext.Provider>
    );
  }
}
