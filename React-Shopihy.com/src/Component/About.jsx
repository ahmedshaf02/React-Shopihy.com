import React from "react";

const About = props => {
  return (
    <>
      <div
        style={{ backgroundColor: "#F0F1F5", marginBottom: 60 }}
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-left">
            <div className="ml-4 mt-4">
              <p style={{ fontWeight: "bold" }}>About Us</p>
              <h1 style={{ fontWeight: "bold", fontSize: 50 }}>
                Shopihy powers around 200 brands and businesses across globe
              </h1>
              <h1 style={{ color: "#A6AAB6 " }}>
                The all-in-one commerce platform to start, run, and grow a
                business.
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <img
              src="https://highpurple.com/wp-content/uploads/2018/12/ecommerce-marketing.png"
              alt="business"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          // width: "70%",
          // height: 400,
          background: "#FFE0FF ",
          margin: "60px",
          padding:10
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTF0R7RjdpbwMTaqfchJBKW_Ra7K_-mOPT-QOatCXw0x8sdvcQ&usqp=CAU"
              alt="business"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div>

              <p style={{ fontWeight: "bold", marginTop: 10 }}>SHOPIHY STORY</p>
              <h1> The first Shopihy store was our own</h1>
              <h5 style={{ lineHeight: 1.6 }}>
                Over a decade ago, we started a store to sell snowboards online.
                None of the ecommerce solutions at the time gave us the control we
                needed to be successful—so we built our own. Today, businesses of
                all sizes use Shopihy, whether they’re selling online, in retail
                stores, or on the go.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <p style={{ fontWeight: "bold" }}>OUR MISSION</p>
        <h2 style={{ fontWeight: "bold" }}>
          Making commerce better for everyone
        </h2>
        <p style={{ color: "#8C7D8C", fontSize: 20 }}>
          {" "}
          We help people achieve independence by making it easier to start, run,
          and grow a business.
          <br /> We believe the future of commerce has more voices, not fewer,{" "}
          <br />
          so we’re reducing the barriers to business ownership to make commerce
          better for everyone.
        </p>
      </div>

      <div style={{ width: "100%", background: "#FFFF83", margin: "0 auto" }}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://images.ctfassets.net/mnc2gcng0j8q/6vfaenqgeW8MwOO2YaEEoi/b74b419c7be750393b94a2f693692e2c/2015-pivotdesk-group-laughing-brian-ferry.jpg?w=600"
              style={{ borderRadius: "50%" }}
              alt="our team"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="ml-4">
              <p style={{ fontWeight: "bold" }}>OUR PEOPLE</p>
              <h1>Creating a community for impact</h1>

              <p style={{ fontSize: 20 }}>
                Shopihy has grown from 5 people in a coffee shop to over 5,000
                across the globe. With over 1,000,000 businesses powered by
                Shopihy, we care deeply about the work we do. We’re constant
                learners who thrive on change and seek to have an impact in
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
