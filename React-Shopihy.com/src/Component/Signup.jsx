import React from "react";
import "./Shop.css";
import axios from "axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      email: "",
      mobile: "",
      description: "user to visit shopping site"
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { history } = this.props;
    const { name, username, password, email, mobile, description } = this.state;
    axios
      .post("http://localhost:8080/auth/register", {
        name,
        email,
        username,
        password,
        mobile,
        description
      })
      .then(data => {
        console.log(data);

        if (!data.data.error) {
          alert(data.data.message);
          this.props.history.push("/login");
        } else {
          alert(data.data.message, "please login");
        }
      })
      .catch(error => alert("something went wrong try again"));
  };

  handleClick = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <>
        <div style={{ height: "", backgroundColor: "white" }}>
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
              <div style={{ color: "#95948D ", margin: 30 }}>
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
                  <i className="fab fa-google loginIcon" />
                  Google
                </span>
                <span className="loginOption">
                  <i className="fab fa-facebook-square loginIcon" />
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
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                className="d-block w-100 loginInput"
                placeholder="you@mail.com"
                required
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
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
              <input
                className="d-block w-100 loginInput"
                placeholder="Mobile Number"
                required
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSubmit} className="loginButton">
                SIGN UP
              </button>

              {/* for pssword reset  */}
              <div className="mt-4">
                <span className="">Already have an account ?</span>
                <span
                  className=""
                  style={{ cursor: "pointer" }}
                  onClick={this.handleClick}
                >
                  <b>Log In</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Signup;
