import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
import ShopProduct from "./ShopProduct";

const productWomen = [
  {
    id: "w101",
    brandName: "Marled",
    clothName: "Marled Mini Bodycon Dress",
    price: 450,
    cutPrice: 899,
    offer: "50 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00378023-04.jpg"
  },
  {
    id: "w102",
    brandName: "K-Active",
    clothName: "Leopard Smocked-Bodice Maxi-dress",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00400842-04.jpg"
  },
  {
    id: "w103",
    brandName: "Privy League",
    clothName: "Basic Loopback Zip Through Hoodie",
    price: 1070,
    cutPrice: 1579,
    offer: "45 % OFF",
    imgUrl:
      "https://i1.adis.ws/i/boohooamplience/fzz60607_purple_xl?$product_image_category_page_horizontal_filters_landscape_pro$&fmt=webp"
  },
  {
    id: "w104",
    brandName: "Beyond Cloud",
    clothName: "Tapered Geo Print Pants",
    price: 670,
    cutPrice: 1079,
    offer: "35 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00398083-01.jpg"
  },
  {
    id: "w105",
    brandName: "Postfold",
    clothName: "Marled Dolman Sleeve Cardigan",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00391410-03.jpg"
  },
  {
    id: "w106",
    brandName: "Closet Drama",
    clothName: "V-Neck Button-Loop Top",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00310736-04.jpg"
  }
];
const productKids = [
  {
    id: "k101",
    brandName: "Marled",
    clothName: "Girls Navy Blue Striped A-Line Dress",
    price: 450,
    cutPrice: 899,
    offer: "50 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00397414-04.jpg"
  },
  {
    id: "k102",
    brandName: "Naughty Nino",
    clothName: "Girls Cream-Coloured Printed Fit and Flare Dress",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00395095-03.jpg"
  },
  {
    id: "k103",
    brandName: "Privy League",
    clothName: "Girls Sea Green & Off-White Tropical Print Fit and Flare Dress",
    price: 1070,
    cutPrice: 1579,
    offer: "45 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00398579-06.jpg"
  },
  {
    id: "k104",
    brandName: "Juniors",
    clothName: "Girls Black & White Colourblocked A-Line Dress",
    price: 670,
    cutPrice: 1079,
    offer: "35 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00399826-04.jpg"
  },
  {
    id: "k105",
    brandName: "Kindred",
    clothName: "Girls Pink Embellished Fit and Flare Dress",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00397751-03.jpg"
  },
  {
    id: "k106",
    brandName: "Closet Drama",
    clothName: "Men White Solid Slim Fit Formal Shirt",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6944447/2018/7/13/6bec2ae1-c41b-4efd-9452-90e4a681db4f1531476689924-na-1721531476689757-1.jpg"
  }
];
const productWomen2 = [
  {
    id: "w2101",
    brandName: "Marled",
    clothName: "Women Black & Golden Printed Straight Kurta",
    price: 450,
    cutPrice: 899,
    offer: "50 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2110558/2018/4/13/11523617167748-Vishudh-Women-Black--Gold-Toned-Printed-Straight-Kurta-9041523617167566-1.jpg"
  },
  {
    id: "w2102",
    brandName: "Corso Venezia",
    clothName: "Women Black & Maroon Printed A-Line Kurta",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl:
      "https://stylehub.shoppersstop.com/wp-content/uploads/2020/03/0049_SS_Colours_to_pick_for_your_ethnic_wear_based_on_your_skin_tone_259x388_7.jpg"
  },
  {
    id: "w2103",
    brandName: "Verma's",
    clothName: "Women Black & Maroon Printed A-Line Kurta",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl:
      "https://img.ltwebstatic.com/images3_pi/2019/12/28/1577500849d4e578dc50cb2dc42499cf28e8ea53cc_thumbnail_600x.webp"
  },
  {
    id: "w2104",
    brandName: "Nayo",
    clothName: "Brushed Chenille Sweater",
    price: 670,
    cutPrice: 1079,
    offer: "35 % OFF",
    imgUrl: "https://www.forever21.com/images/default_330/00365686-03.jpg"
  },
  {
    id: "w2105",
    brandName: "Taavi",
    clothName: "Frill Shirred Polka Dot Cami Dress",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://img.ltwebstatic.com/images3_pi/2020/03/10/158381402498cea17b4995b82e698cf7a62160c1e0_thumbnail_600x.webp"
  },
  {
    id: "w2106",
    brandName: "Closet Drama",
    clothName: "Split Hem Allover Floral Print Dress",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://img.ltwebstatic.com/images3_pi/2020/04/27/1587954097bfdb56c1293b643eb83c490474a3c4d2_thumbnail_600x.webp"
  }
];
const productMen = [
  {
    id: "m101",
    brandName: "Marled",
    clothName: "Men Maroon & Navy Blue Striped Round Neck T-shirt",
    price: 450,
    cutPrice: 899,
    offer: "50 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1697714/2020/1/22/3a66abd7-a7bd-462e-ba8a-ce60cdbe576b1579690524370-Roadster-Men-Maroon--Navy-Blue-Striped-Round-Neck-T-shirt-93-1.jpg"
  },
  {
    id: "m102",
    brandName: "Corso Venezia",
    clothName: "Men White Self Design Round Neck T-shirt",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11551896/2020/3/3/bbb2c6a6-f3d2-450c-aae7-8a87108a85a01583228156890-WROGN-ACTIVE-Men-Tshirts-5961583228155093-1.jpg"
  },
  {
    id: "m103",
    brandName: "Privy League",
    clothName:
      "Men Navy Blue Self Design Round Neck GO-DRY Anti-microbial T-shirt",
    price: 1070,
    cutPrice: 1579,
    offer: "45 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9964525/2019/7/4/4057f12f-3bf0-4be3-8617-6819577abc261562242102416-2GO-Men-Navy-Blue-Solid-GO-DRY-Anti-microbial-Tshirts-511562-1.jpg"
  },
  {
    id: "m104",
    brandName: "Beyond Cloud",
    clothName: "Men Off-White & Blue Self Design Ethnic Bandhgala",
    price: 670,
    cutPrice: 1079,
    offer: "35 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10664298/2019/12/3/64c54e96-839f-4a44-98ef-5aebcf5898bb1575376345726-House-of-Pataudi-Men-Blazers-9561575376342278-1.jpg"
  },
  {
    id: "m105",
    brandName: "Kindred",
    clothName: "Black & White Checked Slim Fit Blazer",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5524664/2018/4/26/11524732062698-hangup-checkered-mens-blazer-size36-5991524732062531-1.jpg"
  },
  {
    id: "m106",
    brandName: "Closet Drama",
    clothName: "Men White Solid Slim Fit Formal Shirt",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1805273/2017/3/15/11489560702761-Hancock-Men-Shirts-7111489560702424-1.jpg"
  }
];
const productWatch = [
  {
    id: "wt101",
    brandName: "Fossil",
    clothName: "Womens Black Dial Digital Leather Watch - ES4651I",
    price: 450,
    cutPrice: 899,
    offer: "50 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/hc7/hca/14708691894302/206109941_9999.jpg_230Wx334H"
  },
  {
    id: "wt02",
    brandName: "Tital",
    clothName: "Aaren Kulor Blue Dial Silicone Analogue Watch - SKW6509",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/h61/h53/13843783778334/206042382_9999.jpg_1088Wx1632H"
  },
  {
    id: "wt103",
    brandName: "Fastrack",
    clothName: "Womens Black Dial Digital Leather Watch - ES4651I",
    price: 1070,
    cutPrice: 1579,
    offer: "45 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/h8b/h24/12889157468190/205576841_9999.jpg_230Wx334H"
  },
  {
    id: "wt104",
    brandName: "Forher",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 670,
    cutPrice: 1079,
    offer: "35 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/h48/hd6/14341020483614/200526776_9999.jpg_230Wx334H"
  },
  {
    id: "wt105",
    brandName: "Nivtz",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/h87/h1a/14709897723934/204701545_9999.jpg_230Wx334H"
  },
  {
    id: "wt106",
    brandName: "Aaren",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/h9b/hff/14121322315806/205383952_9999.jpg_230Wx334H"
  }
];
const productWallet = [
  {
    id: "wl101",
    brandName: "Fastrack",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 450,
    cutPrice: 899,
    offer: "50 % OFF",
    imgUrl:
      "https://n3.sdlcdn.com/imgs/i/3/c/MSABL-Leather-Brown-Casual-Regular-SDL128776549-1-7ed62.jpeg"
  },
  {
    id: "wl02",
    brandName: "Wrang",
    clothName: "Aaren Kulor Blue Dial Silicone Analogue Watch - SKW6509",
    price: 1200,
    cutPrice: 1879,
    offer: "40 % OFF",
    imgUrl:
      "https://n4.sdlcdn.com/imgs/i/4/v/DARK-ROMANCE-Faux-Leather-Blue-SDL128444737-1-bb85b.jpeg"
  },
  {
    id: "wl103",
    brandName: "Disney",
    clothName: "Womens Black Dial Digital Leather Watch - ES4651I",
    price: 1070,
    cutPrice: 1579,
    offer: "45 % OFF",
    imgUrl:
      "https://n3.sdlcdn.com/imgs/i/7/y/ubenio-Leather-Black-Casual-Regular-SDL250714344-1-d3835.jpeg"
  },
  {
    id: "wl104",
    brandName: "Forher",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 670,
    cutPrice: 1079,
    offer: "35 % OFF",
    imgUrl:
      "https://sslimages.shoppersstop.com/sys-master/images/h17/h4b/14403444408350/206742155_9323.jpg_230Wx334H"
  },
  {
    id: "wl105",
    brandName: "Nivtz",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://staticimg.titan.co.in/Fastrack/Catalog/C0381LGY01_1.jpg?pView=listing"
  },
  {
    id: "wl106",
    brandName: "Aaren",
    clothName: "Womens Black Dial Analogue Leather Watch - ES4651I",
    price: 890,
    cutPrice: 1399,
    offer: "40 % OFF",
    imgUrl:
      "https://staticimg.titan.co.in/Fastrack/Catalog/C0415LBL01_1.jpg?pView=listing"
  }
];
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
    });
  };

  // for filter and sort
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { isLogin, match, addToCart } = this.props;
    const { data, order, sort } = this.state;
    // console.log(this.props)

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
          <h1 style={{ fontWeight: "bold" }}>Our Shop is Open for you Now!</h1>
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
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mt-4"
                >
                  <Link
                    onClick={() => this.handleProduct(productMen)}
                    to={`${match.url}/${ele.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <img width="300" src={ele.imgUrl} alt="shopping cloth" />
                    <h6 style={{ fontWeight: "bold", marginTop: 5 }}>
                      {ele.brandName}
                    </h6>
                    <h6>{ele.clothName}</h6>
                    <h6>Rs. {ele.price}</h6>
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
            textAlign: "center"
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
                    <img width="300" src={ele.imgUrl} alt="shopping cloth" />
                    <h6 style={{ fontWeight: "bold", marginTop: 5 }}>
                      {ele.brandName}
                    </h6>
                    <h6>{ele.clothName}</h6>
                    <h6>Rs. {ele.price}</h6>
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
                    <img width="300" src={ele.imgUrl} alt="shopping cloth" />
                    <h6 style={{ fontWeight: "bold", marginTop: 5 }}>
                      {ele.brandName}
                    </h6>
                    <h6>{ele.clothName}</h6>
                    <h6>Rs. {ele.price}</h6>
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
                    <img width="300" src={ele.imgUrl} alt="shopping cloth" />
                    <h6 style={{ fontWeight: "bold", marginTop: 5 }}>
                      {ele.brandName}
                    </h6>
                    <h6>{ele.clothName}</h6>
                    <h6>Rs. {ele.price}</h6>
                  </Link>
                </div>
              ))}
        </div>
        {/* product Watch */}
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
              src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/23450/211897/OLEVS-Rose-Gold-Watch-Women-Japan-Quartz-Watches-Ladies-Top-Brand-Luxury-Female-Wrist-Watch-Girl__46319.1548240480.jpg?c=2?imbypass=on"
              alt="shopping cloth"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <h5 style={{ fontSize: 60, fontWeight: "bold" }}>
              Shop Top Categories
            </h5>
            <h5 style={{ fontSize: 48 }}>Comfort and stylish brand Watches </h5>

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
                    <img width="300" src={ele.imgUrl} alt="shopping cloth" />
                    <h6 style={{ fontWeight: "bold", marginTop: 5 }}>
                      {ele.brandName}
                    </h6>
                    <h6>{ele.clothName}</h6>
                    <h6>Rs. {ele.price}</h6>
                  </Link>
                </div>
              ))}
        </div>
        {/* Wallet header  */}

        <div
          className="row"
          style={{
            backgroundColor: "#2e3830",
            color: "#c53211",
            textAlign: "center"
          }}
        >
          <div className="col-12 col-sm-6 col-md-6">
            <h5 style={{ fontSize: 60, fontWeight: "bold", marginTop: 10 }}>
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
                    <img width="300" src={ele.imgUrl} alt="shopping cloth" />
                    <h6 style={{ fontWeight: "bold", marginTop: 5 }}>
                      {ele.brandName}
                    </h6>
                    <h6>{ele.clothName}</h6>
                    <h6>Rs. {ele.price}</h6>
                  </Link>
                </div>
              ))}
        </div>

        <Route
          path="/product/:id"
          render={props => (
            <ShopProduct {...props} data={data} addToCart={addToCart} />
          )}
        />
      </>
    );
  }
}
