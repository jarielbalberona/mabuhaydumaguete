"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="h-60 image-container">
          <img  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5" />
        </div>
      </div>
      <div>
      <div className="h-60 image-container">
      <img  src="https://images.unsplash.com/photo-1628630500614-1c8924c99c3e" />
        </div>
      </div>
      <div>
      <div className="h-60 image-container">
      <img  src="https://images.unsplash.com/photo-1586508577428-120d6b072945" />
        </div>

      </div>
      <div>
      <div className="h-60 image-container">
      <img  src="https://images.unsplash.com/photo-1586508577428-120d6b072945" />
        </div>
      </div>
      <div>
      <div className="h-60 image-container">
      <img  src="https://images.unsplash.com/photo-1586508577428-120d6b072945" />
        </div>
      </div>
      <div>
      <div className="h-60 image-container">
      <img  src="https://images.unsplash.com/photo-1586508577428-120d6b072945" />
        </div>
      </div>
    </Slider>
  );
}
