import React from "react";
import { Link, Route } from "react-router-dom";
import "./Shop.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="displayFormat mt-4">
          <h4>
            <b>GET IN TOUCH</b>
          </h4>

          {/* <h5><b>We would love to hear from you</b></h5> */}
        </div>
        <div className="displayFormat">
          <h5 className="m-0" style={{ color: "#9298A4" }}>
            <b>We would love to hear from you</b>
          </h5>
        </div>

        <div className="row text-center mt-5">
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5"
            style={{ borderRightStyle: "solid", borderRightWidth: 2 }}
          >
            <b className="d-block mb-2">CALL</b>
            <img
              width="100"
              src="https://cdn.onlinewebfonts.com/svg/img_147186.png"
              alt="call"
            />
            <h6 className="mt-5"> +91-022-6000000</h6>
          </div>

          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5"
            style={{ borderRightStyle: "solid", borderRightWidth: 2 }}
          >
            <b className="d-block mb-2">EMAIL</b>
            <img
              width="100"
              src="https://askbenhandyman.co.uk/wp-content/uploads/2016/04/e-mail-symbol.png"
              alt="call"
            />
            <h6 className="mt-5"> care@shopihy-retail.com</h6>
          </div>

          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5"
            style={{ borderRightStyle: "solid", borderRightWidth: 2 }}
          >
            <b className="d-block mb-2">VISIT</b>
            <img
              width="100"
              src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_01-512.png"
              alt="call"
            />
            <h6 className="mt-5">
              Shopihy Marketing
              <br />
              Consulting Pvt. Ltd
              <br />
              3rd Floor, 77 A<br />
              Malad-w, SV Road,
              <br />
              Mumbai 400001
            </h6>
          </div>

          <div
            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5"
            style={{ borderRightStyle: "solid", borderRightWidth: 2 }}
          >
            <b className="d-block mb-2">OFFICE</b>
            <img
              width="100"
              src="https://user-images.githubusercontent.com/1754533/37703429-23a9cbf0-2d0f-11e8-8c21-3806593dcffb.png"
              alt="call"
            />
            <h6 className="mt-5">
              E-Retail Pvt. Ltd
              <br />
              3rd Floor, 77 A<br />
              Malad-w, SV Road,
              <br />
              Mumbai 400001
            </h6>
          </div>

          {/* <div className="text-center m-2 col-12 col-md-6 col-lg-3">
                  <b className="d-block mb-5">CALL</b>
                  <img width="100" src="https://lh3.googleusercontent.com/proxy/TQ7GiUDx-AsV5TOwG0I1krU9mIws6ThEV5iE7VcJCkH5I8IJiNaM4flHdmIUvDxqj3qJGOqaCS7RDKpU4flv-vYE7VUk1bMa1Q460P1-_oMESw" alt="call"/>
                  <h6 className="mt-5"> +91-022-6000000</h6>
              </div>
              <div className="text-center col-12 col-md-6 col-lg-3">
                  <b className="d-block mb-5">EMAIL</b>
                  <img width="100" src="https://askbenhandyman.co.uk/wp-content/uploads/2016/04/e-mail-symbol.png" alt="call"/>
                  <h6 className="mt-5"> care@shopihy-retail.com</h6>
              </div>
              <div className="text-center col-12 col-md-6 col-lg-3">
                  <b className="d-block mb-5">VISIT</b>
                  <img width="100" src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_01-512.png" alt="call"/>
                  <h6 className="mt-5"> Shopihy Marketing<br/>
                                Consulting Pvt. Ltd<br/>
                                3rd Floor, 77 A<br/>
                                Malad-w, SV Road,<br/>
                                Mumbai 400001</h6>
              </div>
              <div className="text-center col-12 col-md-6 col-lg-3">
                  <b className="d-block mb-5">OFFICE</b>
                  <img width="100" src="https://user-images.githubusercontent.com/1754533/37703429-23a9cbf0-2d0f-11e8-8c21-3806593dcffb.png" alt="call"/>
                  <h6 className="mt-5"> 
                                E-Retail Pvt. Ltd<br/>
                                3rd Floor, 77 A<br/>
                                Malad-w, SV Road,<br/>
                                Mumbai 400001
                  </h6>
              </div> */}
        </div>
      </>
    );
  }
}
export default Login;
