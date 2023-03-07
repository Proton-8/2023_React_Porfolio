import React from "react";
// import Resume23 from "../images/Resume Ron A Shutter 2022.doc";
import "./Services.css";
export const Services = () => {
  return (
    <div className="Service_Section  background-trans-70">
      {/* <span className="lead hide-on-small">
        <h2> My Services:</h2>
        <br></br>
</span> */}
      <div className="sections">
        <h3> Electromechanical Engineer </h3>
        Extensive experience in:
        <li>Concept to complete design for production </li>
        <li>SolidWorks model - prototype expert</li>
        {/* <br></br> */}
        {/* <a href="Resume23"> */}
        <a
          className="newButton"
          href="https://docs.google.com/document/d/1MfuMqFuQyG7wiIdfwsF5YPtcSD7_MPf1/edit?usp=sharing&ouid=115475312727942649219&rtpof=true&sd=true"
        >
          {" "}
          <button>
            <h3> My Resume </h3>
          </button>
        </a>
      </div>

      <div className="sections">
        {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"> */}
        <h3> Full Stack Programmer </h3>
        Experience in:
        <li> CSS </li>
        <li> HTML </li>
        <li> NODE JS</li>
        <li> JAVASCRIPT </li>
        <li> MYSQL DB</li>
        <li> MONGO DB </li>
        <li> EXPRESS JS </li>
        <li> DOCKER </li>
        <li> REACT</li>
        <li> WordPress</li>
        <li> Angular</li>
      </div>

      <div className="sections">
        {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"> */}
        <h3> Game Developer</h3>
        Designed in:
        <li> UNITY - C# </li>
        <li> CoCos - TypeScript </li>
        <li> PHASER </li>
      </div>
    </div>
  );
};
