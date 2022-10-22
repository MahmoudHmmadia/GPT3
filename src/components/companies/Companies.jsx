import React from "react";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
function Companies() {
  return (
    <div className="companies section">
      <div className="container">
        <div className="companies__img">
          <img src={google} alt="" />
        </div>
        <div className="companies__img">
          <img src={slack} alt="" />
        </div>
        <div className="companies__img">
          <img src={atlassian} alt="" />
        </div>
        <div className="companies__img">
          <img src={dropbox} alt="" />
        </div>
        <div className="companies__img">
          <img src={shopify} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
