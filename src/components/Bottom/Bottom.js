import React from "react";
import Background from "../../assets/bottom.png";
import "./Bottom.css";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Bottom() {
  return (
    <div className="bottom-container">
      <h2>Feeling inspired?</h2>
      <h4>Explore our on-demand courses and achieve something extraordinary</h4>
      <img src={Background} className="bottom-image" alt="Bottom_Image" />
      <div className="button-container">
        <Button
          variant="outlined"
          className="button-element"
          sx={{
            color: "black", 
            borderColor: "black", 
            backgroundColor: "white",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "rgba(255, 255, 255, 0.8)", 
            },
          }}
        >
          Start Learning
          <span>
            <ArrowOutwardIcon />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Bottom;
