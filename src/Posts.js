import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import "./Posts.css";
import { useStateValue } from "./StateProvider";

function Posts({ profileImg, image, username, timestamp, message }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="posts">
      <div className="posts__top">
        <Avatar src={profileImg} className="posts__avatar" />
        <div className="posts__info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="posts__bot">
        <p>{message}</p>
      </div>
      <div className="posts__img">
        <img src={image} alt="" />
      </div>
      <div className="posts__options">
        <div className="posts__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="posts__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="posts__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="posts__option">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Posts;
