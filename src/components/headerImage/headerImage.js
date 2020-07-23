import React from "react";
import headerPicture from "../../images/bg-header-desktop.svg";
import "./headerImage.scss";

function HeaderImage() {
  return (
    <div className='header-image-container'>
      <img src={headerPicture} />
    </div>
  );
}

export default HeaderImage;
