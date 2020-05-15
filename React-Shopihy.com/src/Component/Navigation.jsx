import React from "react";
import { Link, Route } from "react-router-dom";
import "./Shop.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <h1 style={{ backgroundColor: "rgba(241, 242, 209,0.7)", margin: 10 }}>
          Home
        </h1> */}
        {/* <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#424242 "}}> */}
        <nav
          className="navbar navbar-expand-lg navbar-light "
          style={{ backgroundColor: "#232F34 ", marginBottom: 10 }}
        >
          {/* <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#344955 "}}> */}
          {/* <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Navbar
          </a> */}
          <img width="100" height="60" src="/logo6.jpg" alt="logo" />
          <span
            style={{
              color: "white",
              fontSize: 30,
              marginLeft: 10,
              fontWeight: "bold"
            }}
          >
            Shopihy
          </span>
          <button
            style={{ backgroundColor: "white" }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="form-inline my-2 my-lg-0">
              {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
              <ul className="navbar-nav mr-auto ">
                <Link to="/" className="nav-item active listStyle">Home</Link>
                <Link to="/about" className="nav-item active listStyle">About</Link>
                <Link to="/product" className="nav-item active listStyle">Shop Now</Link>
                <Link to="/cart" className="nav-item active listStyle">
                  <i className="fas fa-shopping-cart" style={{ fontSize: 20 }} /><span style={{color:"#feda6a",marginLeft:2,fontWeight:"bold"}}>{this.props.value}</span>
                </Link>
                <Link to="/contact" className="nav-item active listStyle">Contact</Link>
                <Link to="/login" className="nav-item active listStyle">{!this.props.isLogin ?"Login":"Logout"}</Link>
              </ul>
            </form>
          </div>
        </nav>
      </>
    );
  }
}
export default Navigation;
