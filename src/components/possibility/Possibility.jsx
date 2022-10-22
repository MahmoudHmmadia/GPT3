import React from "react";
import image from "../../assets/possibility.png";
function Possibility() {
  return (
    <div className="possibility section">
      <div className="container">
        <div className="possibility__image">
          <img src={image} alt="" />
        </div>
        <div className="possibility__containe">
          <p className="possibility__containe-heading">
            Request Early Access to Get Started
          </p>
          <h1 className="possibility__containe-title">
            The possibilities are beyond your imagination
          </h1>
          <p className="possibility__containe-info">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="possibility__containe-footer">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </div>
  );
}

export default Possibility;
