import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ imgSrc, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${imgSrc})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
