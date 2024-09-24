import React from 'react';
import './Banner.scss';
import videoBanner from '../../assets/banner.mp4'
const Banner = () => {
  return (
    <div className="banner">
      <video src={videoBanner} autoPlay loop muted />
      <div className="text-overlay">
        <div className="looping-text">
          <span>Welcome to my CV</span>
          <span>Scroll down to understand more about me</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
