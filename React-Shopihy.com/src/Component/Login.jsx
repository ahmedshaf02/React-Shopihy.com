import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import axios from "axios"
import "./Shop.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
      
      
    };
  }
  
  handleClick =()=>{
    const{history} = this.props
    history.push("/signup")
  }

  handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
  
  handleSubmit = () => {
    // this.setState({ isLoading: true });
    const {username, password} = this.state;
    axios
    .post("http://localhost:8080/auth/login", {
      username,
      password
      })
      .then(data => {
        console.log(data);
        
        if(!data.data.error){
  
          alert("logged in");
        }
        // this.setState({
        //     data: [...this.state.data, data.data],
        //     isLoading: false
        //   });
      })
      .catch(error => alert("please invalid user"));
  };





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
                  placeholder="Username"
                  required
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  className="d-block w-100 loginInput"
                  placeholder="Password"
                  required
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              <button onClick={this.handleSubmit} className="loginButton">LOG IN</button>

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
