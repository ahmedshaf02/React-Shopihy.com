
import React from "react";

const Footer = props => {
  return (
    <>
      <div className="curveFooter">
          <div>
            <span className="mr-2"> Connect With us:</span>

            <a href="https://www.facebook.com/" target="_blank"> 
            <i className="fab fa-facebook-square loginIcon" style={{fontSize:40,margin:10, padding:18,boxShadow:"23px 23px 38px #0d0e10, -23px -23px 38px #2d2e34", borderRadius:10}} />
            </a>

            <a href="https://www.twitter.com/" target="_blank"> 
            <i className="fab fa-twitter-square loginIcon"  style={{fontSize:40,margin:10, padding:18,boxShadow:"23px 23px 38px #0d0e10, -23px -23px 38px #2d2e34", borderRadius:10}} />
            </a>

            <a href="https://www.instagram.com/" target="_blank"> 
            <i className="fab fa-instagram loginIcon"  style={{fontSize:40,margin:10, padding:18,boxShadow:"23px 23px 38px #0d0e10, -23px -23px 38px #2d2e34", borderRadius:10}} />
            </a>

            <a href="https://www.linkedin.com/" target="_blank"> 
            <i className="fab fa-linkedin loginIcon"  style={{fontSize:40,margin:10, padding:18,boxShadow:"23px 23px 38px #0d0e10, -23px -23px 38px #2d2e34", borderRadius:10}}/>
            </a>

            
          </div>
      </div>
    </>
  );
};

export default Footer;
