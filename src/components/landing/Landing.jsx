import React from "react";
import landing from "../../assets/ai.png";
import people from "../../assets/people.png";
function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="landing__content">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p className="landing-info">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form>
            <input type="text" placeholder="Your Email Address" />
            <input type="submit" value="Get Started" />
          </form>
          <div className="people">
            <img src={people} alt="" />
            <p className="people-text">
              1.6k+ 1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="landing__img">
          <img src={landing} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
