"use client";

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: {lat: number, lng: number, text: string}) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="google-map-code">
        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjVbUc-Uq3egRxpbRnjOPOWXZU8AfD83c&q=MabuhayDumaguete+Dive+Center" width="100%" height="500" frameBorder="0" style={{border:0}} allowFullScreen={false} aria-hidden="false" tabIndex={0}></iframe>
        
      </div>
  );
}