import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const SlideImage = (props) => {
  // const images = [
  //     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  const { image1, image2, image3 } = props;

  return (
    <Slide>
      <div className="each-slide-effect">
        <div
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{ backgroundImage: `url(${image3})` }} 
        ></div>
      </div>
    </Slide>
  );
};

export default SlideImage;
