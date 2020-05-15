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
        <div
          style={{
            backgroundColor: "#344955",
            textAlign: "center",
            height: 100,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h4
            style={{
              backgroundColor: "#232F34",
              padding: 8,
              width: "70%",
              borderRadius: 4,
              boxShadow: "2px 4px 6px black ",
             
            }}
            className="offer"
          >
            <span className="offerText">
              Min 30% OFF + Extra 20% OFF / Your First Buy Free
            </span>
          </h4>
        </div>
      </>
    );
  }
}
export default Navigation;
