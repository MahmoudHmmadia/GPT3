import React from "react";
import Box from "./Box";
import image1 from "../../assets/blog01.png";
import image2 from "../../assets/blog02.png";
import image3 from "../../assets/blog03.png";
import image4 from "../../assets/blog04.png";
import image5 from "../../assets/blog05.png";
function Blog() {
  return (
    <div className="blog section">
      <div className="container">
        <h1 className="blog__title">
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
        <div className="blog__main">
          <div className="big-box">
            <Box image={image1} />
          </div>
          <div className="other-boxes">
            <Box image={image2} />
            <Box image={image3} />
          </div>
          <div className="other-boxes">
            <Box image={image4} />
            <Box image={image5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
