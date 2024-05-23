import React from "react";
import { ReactComponent as Background } from "../../assets/background_scroll.svg";
import Img1 from "../../scroll_images/image1.svg";
import Img2 from "../../scroll_images/image2.svg";
import Img3 from "../../scroll_images/image3.svg";
import Img4 from "../../scroll_images/image4.svg";
import Img5 from "../../scroll_images/image5.svg";
import Img6 from "../../scroll_images/image6.svg";
import Img7 from "../../scroll_images/image7.svg";
import Img8 from "../../scroll_images/image8.svg";

import "./Middle.css";

function Middle() {
  return (
    <div className="container">
      <Background className="background-image" />
      <div className="text-container">
        <h1 className="text-h1">
          Are you a <span>Social Freak Mark?</span>
        </h1>
        <h3 className="text-h3">Want to engage and upskill yourself</h3>
        <h5 className="text-h6">
          Yes we do organize outdoor events where you can meet like-minded
          people, exchange ideas, and attend hosted events. There, we hold
          talks, workshops, and community gatherings
        </h5>
      </div>
      <div className="scroll-containers-wrapper">
        <div className="scroll-containers">
          <div className="marquee-container-1">
            <div className="marquee-content-1">
              <img src={Img1} alt="Image_8" className="marquee-item-2" />
              <img src={Img2} alt="Image_7" className="marquee-item-2" />
              <img src={Img3} alt="Image_6" className="marquee-item-2" />
              <img src={Img4} alt="Image_5" className="marquee-item-2" />
              <img src={Img5} alt="Image_4" className="marquee-item-2" />
              <img src={Img6} alt="Image_3" className="marquee-item-2" />
              <img src={Img7} alt="Image_2" className="marquee-item-2" />
              <img src={Img8} alt="Image_1" className="marquee-item-2" />
              <img src={Img1} alt="Image_1" className="marquee-item-2" />
              <img src={Img2} alt="Image_2" className="marquee-item-2" />
              <img src={Img3} alt="Image_3" className="marquee-item-2" />
              <img src={Img4} alt="Image_4" className="marquee-item-2" />
              <img src={Img5} alt="Image_5" className="marquee-item-2" />
              <img src={Img6} alt="Image_6" className="marquee-item-2" />
              <img src={Img7} alt="Image_7" className="marquee-item-2" />
              <img src={Img8} alt="Image_8" className="marquee-item-2" />
            </div>
          </div>
          <div className="marquee-container-2">
            <div className="marquee-content-2">
              <img src={Img1} alt="Image_8" className="marquee-item-2" />
              <img src={Img2} alt="Image_7" className="marquee-item-2" />
              <img src={Img3} alt="Image_6" className="marquee-item-2" />
              <img src={Img4} alt="Image_5" className="marquee-item-2" />
              <img src={Img5} alt="Image_4" className="marquee-item-2" />
              <img src={Img6} alt="Image_3" className="marquee-item-2" />
              <img src={Img7} alt="Image_2" className="marquee-item-2" />
              <img src={Img8} alt="Image_1" className="marquee-item-2" />
              <img src={Img1} alt="Image_1" className="marquee-item-2" />
              <img src={Img2} alt="Image_2" className="marquee-item-2" />
              <img src={Img3} alt="Image_3" className="marquee-item-2" />
              <img src={Img4} alt="Image_4" className="marquee-item-2" />
              <img src={Img5} alt="Image_5" className="marquee-item-2" />
              <img src={Img6} alt="Image_6" className="marquee-item-2" />
              <img src={Img7} alt="Image_7" className="marquee-item-2" />
              <img src={Img8} alt="Image_8" className="marquee-item-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
