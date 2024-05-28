import React from "react";
import "./Welcome.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as Image1 } from "../../assets/ok.svg"; 
import { ReactComponent as Image } from "../../assets/ok1.svg"; 
import { ReactComponent as Image2 } from "../../assets/ok2.svg"; 

function Welcome() {
  return (
    <Box className='welcome-container'>
      <Typography className="head-text">Welcome to CourseVita,</Typography>
      <Typography className="head-text">
        Where we believe in
        <span>Crafting Visionaries.</span>
      </Typography>
      <Box className="images-wrapper">
        <Box className="image-container">
          <Image />
        </Box>
        <Box className="image-container2">
          <Image2 />
        </Box>
        <Box className="image-container1">
          <Image1 />
        </Box>
      </Box>
        <Typography className="bottom-text">
          In today's information-rich environment, we strive to offer more than
          simply another online learning platform. CourseVita, we are dedicated
          about developing visionaries people who dare to dream large, innovate
          persistently, and impact the future.
        </Typography>
    </Box>
  );
}

export default Welcome;
