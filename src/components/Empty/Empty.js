import React from "react";
import "./Empty.scss";
import { ReactComponent as Logo1 } from "../../assets/logo1.svg";
import { ReactComponent as Logo2 } from "../../assets/logo2.svg";
import { ReactComponent as Logo3 } from "../../assets/logo3.svg";
import { ReactComponent as Logo4 } from "../../assets/logo4.svg";
import { Box, Typography } from "@mui/material";

function Empty() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
      className="container"
    >
      <Typography
        className="middle-text"
        sx={{
          fontSize: {
            xs: "25px",
            md: "30px",
          },
        }}
      >
        Who <span>we are</span>
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "10px",
            md: "18px",
          },
        }}
        className="middle-subtext"
      >
        CourseVita is a passionate team of educators, technologists, and
        innovators committed to creating high-quality educational content that
        is accessible to everyone. We believe that education is a lifelong
        journey, and we are here to support learners at every stage of their
        development, from beginners to advanced professionals.
      </Typography>
      <Box className="cards-container">
        <Logo4 className="logo" />
        <Typography className="head-text">Innovation</Typography>
        <Typography className="para-text">
          We continuously seek out new technologies and methodologies to enhance
          the learning experience.
        </Typography>
      </Box>
      <Box className="cards-container">
        <Logo3 className="logo" />
        <Typography className="head-text">Integrity</Typography>
        <Typography className="para-text">
          We are committed to maintaining the highest standards of honesty and
          transparency in everything we do.
        </Typography>
      </Box>
      <Box className="cards-container">
        <Logo2 className="logo" />
        <Typography className="head-text">Excellence</Typography>
        <Typography className="para-text">
          We aim to exceed expectations by providing top-notch educational
          content and exceptional customer service.
        </Typography>
      </Box>
      <Box className="cards-container">
        <Logo1 className="logo" />
        <Typography className="head-text">Community</Typography>
        <Typography className="para-text">
          We foster a supportive and inclusive environment where all learners
          can thrive.
        </Typography>
      </Box>
    </Box>
  );
}

export default Empty;
