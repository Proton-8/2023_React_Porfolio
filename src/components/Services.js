import React from "react";
// import Resume23 from "../images/Resume Ron A Shutter 2022.doc";


export const Services = () => {
  return (
    <main id="service" className="container2 background-trans-70">
      {" "}
      <span className="lead hide-on-small">
        <h2> My Services:</h2>
        {/* <br></br> */}
        <p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: 20,
            }}
          >
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
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
            </div>

            {/* <div>
              <h3> Front-End Development </h3>
              <li> CSS </li>
              <li> HTML </li>
              <li> JAVASCRIPT </li>
              <li> REACT</li>
            </div> */}
            <div>
              <h3> Electromechanical Engineer </h3>
              Extensive experience in:
              <li>Concept to complete design for production </li>
              <li>SolidWorks model - prototype expert</li>
              {/* <br></br> */}
              {/* <a href="Resume23"> */}
                <a href="https://docs.google.com/document/d/1MfuMqFuQyG7wiIdfwsF5YPtcSD7_MPf1/edit?usp=sharing&ouid=115475312727942649219&rtpof=true&sd=true">{" "}
                <button>
                  <h3> My Resume </h3>
                </button>
              </a>
            </div>
            <div>
              <h3> GAME Developer </h3>
              Experience designing in:
              <li> UNITY game Design - C#</li>
              <li> CoCos Game Design - TypeScript</li>
              <li> PHASER Game Design</li>
            </div>
            <div>
              <h3> Web Page Designer </h3>
              Experience in:
              <li> WordPress</li>
              <li> REACT</li>
              <li> Angular</li>
            </div>
          </div>
        </p>
      </span>
      <span>
        <br></br>
        <p>
          <div>{/* < id="showcase"> */}</div>{" "}
        </p>
        {/* </body> */}
        <br></br>
        <p> </p>
        <p>
          {" "}
          <br></br>
          <br></br>
        </p>{" "}
      </span>
    </main>
  );
};
