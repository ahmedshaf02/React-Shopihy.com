import React from "react";
import { Link, Route } from "react-router-dom";
import "./Shop.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick=()=>{
    const{history}=this.props
    history.push("/login")
  }

  render() {
    return (
      <>
        <div style={{ height: "", backgroundColor: "white"}}>
          <div className="loginContainer ">
            <div className="login m-4">
              <h2
                style={{
                  fontWeight: "600",
                  color: "rgb(61, 60, 60",
                  marginTop: 20
                }}
              >
                Sign Up
              </h2>
              <div
                style={{ color: "#95948D ", margin:30 }}
              >
                Sign up to get access to exciting offers and promotions
              </div>
              <h5
                className="text-left"
                style={{ fontWeight: "bold", color: "black", marginTop: 10 }}
              >
                Continue With
              </h5>

              <div className="displayFormat">
                <span className="loginOption">
                  <i class="fab fa-google loginIcon" />
                  Google
                </span>
                <span className="loginOption">
                  <i class="fab fa-facebook-square loginIcon" />
                  Facebook
                </span>
              </div>

              {/* <h5
                className="text-left"
                style={{ fontWeight: "bold", color: "black", marginTop: 30 }}
              /> */}
              <input
                className="d-block w-100 loginInput"
                placeholder="Full Name"
                required
              />
              <input
                className="d-block w-100 loginInput"
                placeholder="Email Address"
                required
              />
              <input
                className="d-block w-100 loginInput"
                placeholder="Password"
                required
              />
              <input
                className="d-block w-100 loginInput"
                placeholder="Mobile Number"
                required
              />
              <button className="loginButton">SIGN UP</button>

              {/* for pssword reset  */}
              <div className="mt-4">
                <span className="">
                  Already have an account ?
                </span>
                <span className="" style={{ cursor: "pointer" }} onClick={this.handleClick}>
                  <b>Log In</b>
                </span>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid">
            <div className="row">
              <div></div>
              <div></div>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}
export default Login;
