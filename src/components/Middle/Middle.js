import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Middle.scss";
import Img1 from "../../scroll_images/image1.svg";
import Img2 from "../../scroll_images/image2.svg";
import Img3 from "../../scroll_images/image3.svg";
import Img4 from "../../scroll_images/image4.svg";
import Img5 from "../../scroll_images/image5.svg";
import Img6 from "../../scroll_images/image6.svg";
import Img7 from "../../scroll_images/image7.svg";
import Img8 from "../../scroll_images/image8.svg";

function Middle() {
  const images_up = [Img1, Img2, Img3, Img4];
  const images_down = [Img5, Img6, Img7, Img8];

  return (
    <Box className="background">
      <Box
        sx={{
          display:"flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 2,
          padding: 2,
          width: {
            xs: "90vw",
            sm: "100vw",
            md: "1250px",
          },
          height: {
            xs: "50vh",
            sm: "80vh",
            md: "500px",
          },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          className="Text-box"
          sx={{
            zIndex: 1,
            textAlign: "left",
            padding: "20px",
          }}
        >
          <Typography className="title">
            Greater <span>community engagement</span>
          </Typography>
          <Typography className="subtitle">
            We are refining community building
          </Typography>
          <Typography className="paragraph">
            Yes, we do organize outdoor events where you can meet like-minded
            people, exchange ideas, and attend hosted events. There, we hold
            talks, workshops, and community gatherings.
          </Typography>
        </Box>
        {/* Scroll Container */}
        <Box
          className="scroll-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingY: 2,
            width: "30%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box className="scroll-images">
            {images_up
              .concat(images_up)
              .concat(images_up)
              .concat(images_up)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image_${index + 1}`}
                  className="scroll-image"
                />
              ))}
          </Box>
        </Box>
        {/* Scroll Container with Reverse Direction */}
        <Box
          className="scroll-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingY: 2,
            width: "30%",
            height: "100%",
            overflow: "hidden",
            marginRight: "5%",
          }}
        >
          <Box
            className="scroll-images"
            style={{ animationDirection: "reverse" }}
          >
            {images_down
              .concat(images_down)
              .concat(images_down)
              .concat(images_down)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image_${index + 1}`}
                  className="scroll-image"
                />
              ))}
          </Box>
        </Box>
        <Box
          className="horizontal-scroll-images"
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none !important",
            },
            alignItems: "",
            gap: "10px",
            paddingX: "3",
            marginTop: "60%",
            Zindex: "1",
          }}
        >
          {images_down.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image_${index + 1}`}
              className="horizontal-scroll-item"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Middle;















// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import "./Middle.scss";
// import Img1 from "../../scroll_images/image1.svg";
// import Img2 from "../../scroll_images/image2.svg";
// import Img3 from "../../scroll_images/image3.svg";
// import Img4 from "../../scroll_images/image4.svg";
// import Img5 from "../../scroll_images/image5.svg";
// import Img6 from "../../scroll_images/image6.svg";
// import Img7 from "../../scroll_images/image7.svg";
// import Img8 from "../../scroll_images/image8.svg";

// function Middle() {
//   const images_up = [Img1, Img2, Img3, Img4];
//   const images_down = [Img5, Img6, Img7, Img8];

//   return (
//     <Box className="background">
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: {
//             xs: "flex-start",
//             sm: "center",
//             md: "center",
//           },
//           backgroundColor: "white",
//           borderRadius: 2,
//           padding: 2,
//           boxShadow: 3,
//           width: {
//             xs: "90vw",
//             sm: "80vw",
//             md: "1250px",
//           },
//           height: {
//             xs: "60vh",
//             sm: "80vh",
//             md: "500px",
//           },
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <Box
//           className="Text-box"
//           sx={{
//             zIndex: 1,
//             textAlign: "left",
//             padding: "20px",
//           }}
//         >
//           <Typography className="title">
//             Greater <span>community engagement</span>
//           </Typography>
//           <Typography className="subtitle">
//             We are refining community building
//           </Typography>
//           <Typography className="paragraph">
//             Yes, we do organize outdoor events where you can meet like-minded
//             people, exchange ideas, and attend hosted events. There, we hold
//             talks, workshops, and community gatherings.
//           </Typography>
//         </Box>
//         {/* Scroll Container */}
//         <Box
//           className="scroll-container"
//           sx={{
//             display: {
//               xs: "none !important",
//               sm: "flex",
//               md: "flex",
//             },
//             flexDirection: {
//               xs: "row",
//               sm: "column",
//               md: "column",
//             },
//             paddingY: 1,
//             width: "30%",
//             height: "100%",
//             overflow: "hidden",
//           }}
//         >
//           <Box className="scroll-images">
//             {images_up
//               .concat(images_up)
//               .concat(images_up)
//               .concat(images_up)
//               .map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Image_${index + 1}`}
//                   className="scroll-image"
//                 />
//               ))}
//           </Box>
//         </Box>
//         {/* Scroll Container with Reverse Direction */}
//         <Box
//           className="scroll-container"
//           sx={{
//             display: {
//               xs: "none !important",
//               sm: "flex",
//               md: "flex",
//             },
//             flexDirection: "column",
//             paddingY: 1,
//             width: "30%",
//             height: "100%",
//             overflow: "hidden",
//             marginRight: "5%",
//           }}
//         >
//           <Box
//             className="scroll-images"
//             style={{ animationDirection: "reverse" }}
//           >
//             {images_down
//               .concat(images_down)
//               .concat(images_down)
//               .concat(images_down)
//               .map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Image_${index + 1}`}
//                   className="scroll-image"
//                 />
//               ))}
//           </Box>
//         </Box>
//         <Box
//           className="horizontal-scroll-images"
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "",
//             gap: "10px",
//             paddingX: 1,
//             marginTop: "60%", 
//           }}
//         >
//           {images_down.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Image_${index + 1}`}
//               className="horizontal-scroll-item"
//             />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Middle;