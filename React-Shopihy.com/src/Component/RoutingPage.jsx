import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Navigation from "./Navigation";
import Signup from "./Signup";
import AllProduct, {DataContext} from "./AllProduct";
import Cart from "./Cart";
import ShopProduct from "./ShopProduct";
import Error from "./Error";
import Footer from "./Footer";
import OrderPlace from "./OrderPlace";
import {Provider} from "./Context"


export default class RoutingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
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
  handleLogout=()=>{
    if(this.state.isLogin){
      this.setState({
        isLogin:false
      })
    }
  }

  addToCart = (data, history) => {
    // console.log(data,history)
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
    const {length } = this.state;

    return (
      <>
        <Provider value={{...this.state,handleLogin:this.handleLogin,handleLogout:this.handleLogout, addToCart:this.addToCart, addToOrder:this.addToOrder,removeCartArr:this.removeCart}}>

          <Navigation value={length} />
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home {...props} />}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                />
              )}
            />
            <Route path="/signup" render={props => <Signup {...props} />} />
            <Route
              
              path="/product"
              render={props => (
                <AllProduct
                  {...props}
                  // removeCart={this.removeCart}
                />
              )}
            />

            {/* <DataContext.Consumer>
              {
                data=>{
                  console.log(data)
                  return(
                    <Route
                        exact
                          path="/product/:id"
                          render={(props) => <ShopProduct {...props} data={data} />}
                        
                        />
                  )
                }
              }
            </DataContext.Consumer> */}
            <Route
              path="/cart"
              component={Cart}
            />
            <Route path="/orderPlace" render={() => <OrderPlace />} />
            <Route render={() => <Error />} />
          </Switch>

          <Footer />
        </Provider>
      </>
    );
  }
}
