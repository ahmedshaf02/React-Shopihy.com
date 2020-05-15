import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Navigation from "./Navigation";
import Signup from "./Signup";
import AllProduct from "./AllProduct";
import Cart from "./Cart";
import ShopProduct from "./ShopProduct";
import Error from "./Error";
import Footer from "./Footer";
import OrderPlace from "./OrderPlace";
// import Offers from "./Offers"

export default class RoutingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      cartArr: [],
      length: "",
      history: "",
      orderArr: []
    };
  }

  handleLogin = () => {
    this.setState({
      isLogin: true
    });
  };

  addToCart = (data, history) => {
    this.setState({
      cartArr: [...this.state.cartArr, data],
      length: this.state.cartArr.length + 1,
      history: history
    });
  };

  removeCart = value => {
    const data = this.state.cartArr;
    const cartArrNew = data.filter(ele => ele.id !== value);
    this.setState({
      cartArr: cartArrNew,
      length: this.state.length - 1
    });
  };

  addToOrder = value => {
    const order = this.state.cartArr.find(ele => ele.id === value);

    this.setState({ orderArr: [...this.state.orderArr, order] });
  };

  render() {
    console.log(this.state);
    const { isLogin,length } = this.state;

    return (
      <>
        <Navigation value={length} isLogin={isLogin} />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} isLogin={isLogin} />}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                isLogin={isLogin}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route
            path="/product"
            render={props => (
              <AllProduct
                exact
                {...props}
                isLogin={isLogin}
                addToCart={this.addToCart}
                // removeCart={this.removeCart}
              />
            )}
          />
          {/* <Route
                path="/product/:id"
                render={(props) => <ShopProduct {...props} data={productArr} />}
               
              /> */}
          <Route
            path="/cart"
            render={() => (
              <Cart
                data={this.state.cartArr}
                addToOrder={this.addToOrder}
                removeCartArr={this.removeCart}
                history={this.state.history}
              />
            )}
          />
          <Route path="/orderPlace" render={() => <OrderPlace />} />
          <Route render={() => <Error />} />
        </Switch>

        <Footer />
      </>
    );
  }
}
