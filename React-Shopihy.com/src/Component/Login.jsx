import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import "./Shop.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:""
      
      
    };
  }

  handleClick =()=>{
    const{history} = this.props
    history.push("/signup")
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleInput=()=>{

    const user  = "admin"
    const pass = "admin"
    const {email, password, } =  this.state

    this.setState({
      email:"",
      password:""
    })

    if(user ===email && pass === password){
        this.props.handleLogin()
        this.props.history.push("/product")
    }else{
      alert("login info not correct")
    }
  }


  render() {

    const {isLogin} =  this.props

    if(isLogin){
      return <Redirect to="/product"/>
    }

    return (
      <>
        <div style={{ backgroundColor: "white"}}>
          <div className="loginContainer">
            <div className="login mb-5">
              <h2
                style={{
                  fontWeight: "600",
                  color: "rgb(61, 60, 60",
                  marginTop: 20
                }}
              >
                Log In
              </h2>
              <div
                style={{ color: "#95948D ", marginTop: 20, marginBottom: 20 }}
              >
                Sign in to access your Orders, Wishlist and Recommendations
              </div>
              <h5
                className="text-left"
                style={{ fontWeight: "bold", color: "black", marginTop: 10 }}
              >
                Continue With
              </h5>

              <div className="displayFormat">
                <span className="loginOption">
                  <i className="fab fa-google loginIcon" />
                  Google
                </span>
                <span className="loginOption">
                  <i className="fab fa-facebook-square loginIcon" />
                  Facebook
                </span>
              </div>

              <h5
                className="text-left"
                style={{ fontWeight: "bold", color: "black", marginTop: 30 }}
              >
                Using Email
              </h5>
              <input
                className="d-block w-100 loginInput"
                placeholder="Email"
                required
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                />
              <input
                className="d-block w-100 loginInput"
                placeholder="Password"
                required
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
              <button onClick={this.handleInput} className="loginButton">LOG IN</button>

              {/* for pssword reset  */}
              <div className="mt-4" style={{ fontSize: 14 }}>
                <span className="float-left" style={{ cursor: "pointer" }}>
                  Reset Password
                </span>
                <span className="float-right" style={{ cursor: "pointer" }} onClick={this.handleClick} >
                  <b>New to Shopihy?</b> Create Account
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
