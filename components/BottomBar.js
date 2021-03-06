import Image from "react-native-remote-svg";
import React from "react";

function BottomBar(props) {
  const svg = `
  <svg width="375" height="56" viewBox="0 0 375 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <path d="M148.197 8H0V56H375V8H227.803C225.796 28.2133 208.741 44 188 44C167.259 44 150.204 28.2133 148.197 8Z" fill="#20BF6B"/>
  </g>
  <defs>
  <filter id="filter0_d" x="-4" y="0" width="383" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="-4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>
  
  `;
  return (
    <Image
      style={{ width: "100%", height: "100%" }}
      source={{
        uri: "data:image/svg+xml;utf8," + svg,
      }}
    />
  );
}

export default BottomBar;
