import React from "react";
import avatar from "../images/mug-1c.jpg";
export const About = () => {
  return (
    <main id="about" className="container background-trans-50">
      {" "}
      <h1>
        Ronald Shutter <img src={avatar} alt="User avatar" className="avatar" />
      </h1>
      <span className="lead hide-on-small">
        <h3> ABOUT ME:</h3>
        <i>
          I have always believed in continued learning and develpment.   I am an experienced Engineer with over 25 years and a Growth Mindset that continues to fuel my passion.  I am now expanding my
          horizons to include the coding world!  I would be honored to help you with your dreams.
      
        </i>
        <br></br>
        Below are some of the services that I offer:
        <br></br>
  
      </span>
    </main>
  );
};
