import React from "react";
import "./Welcome.css";
import { ReactComponent as Image } from "../../assets/ok.svg"; 
import { ReactComponent as Image1 } from "../../assets/ok1.svg"; 
import { ReactComponent as Image2 } from "../../assets/ok2.svg"; 

function Welcome() {
  return (
    <>
      <h1 className="head-text">Welcome to CourseVita,</h1>
      <h1 className="head-text">
        {" "}
        Where we believe in
        <span>Crafting Visionaries.</span>
      </h1>
      <div className="images-wrapper">
        <div className="image-container">
          <Image />
        </div>
        <div className="image-container2">
          <Image2 />
        </div>
        <div className="image-container1">
          <Image1 />
        </div>
      </div>
      <div className="text-gap">
        <h4 className="bottom-text">
          In today's information-rich environment, we strive to offer more than
          simply another online learning platform. CourseVita, we are dedicated
          about developing visionaries people who dare to dream large, innovate
          persistently, and impact the future.
        </h4>
      </div>
    </>
  );
}

export default Welcome;
