import React from "react";
import "./Bottom.scss";
import { Box, Typography, Button } from "@mui/material";

function Bottom() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: {
            xs: "90vw",
            sm: "90vw",
            md: "1210px",
          },
          height: {
            xs: "15vh",
            sm: "25vh",
            md: "150px",
          },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 3,
        }}
        className="bottom-container"
      >
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              sm: "25px",
              md: "28px",
            },
          }}
          className="bottom-head"
        >
          Want to be a part of coursevita
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "10px",
              sm: "20px",
              md: "22px",
            },
          }}
          className="bottom-subtext"
        >
          Work on big things together.
        </Typography>
        <Button
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#f0f0f0", // slightly different shade of white on hover
            },
            width: "10%",
          }}
          className="buttom-botton"
        >
          Join us
        </Button>
      </Box>
    </Box>
  );
}

export default Bottom;
