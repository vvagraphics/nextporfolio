"use client"
import React from "react";
import path from "path";
import "./app/hero-video.css";

const HeroVideo: React.FC = () => {
  const videoPath = path.join(__dirname, "video.mp4");
  return (
    <div className="hero-video">
      <video
        className="hero-video__content"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
