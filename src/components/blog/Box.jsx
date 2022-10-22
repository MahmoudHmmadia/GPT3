import React from "react";

function Box({ image }) {
  return (
    <div className="box">
      <img src={image} alt="" />
      <div className="box__containe">
        <div className="time"> Sep 26, 2021 </div>
        <h4 className="info">
          GPT - 3 and Open AI is the future.Let us exlore how it is ?
        </h4>
        <div className="box__footer"> Read Full Article </div>
      </div>
    </div>
  );
}
export default Box;
