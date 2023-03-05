import React from "react";
import avatar from "../images/mug-1c.jpg";
export const Header = () => {
  return (
    <main id="about" className="container background-trans-50">
      {" "}
      <h1>
        Ronald Shutter <img src={avatar} alt="User avatar" className="avatar" />
      </h1>
      <span className="lead hide-on-small">
        <h3> ABOUT ME:</h3>
        <i>
          {" "}
          With over 25 years in the Engineering field, I am expanding my
          horizons to include the coding world!
        </i>
        <br></br>
        ...
      </span>
    </main>
  );
};
