import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./Post.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function Post() {
  // how you actually write states
  // 1. keeps track of input 2. modifier for no.1
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileSrc: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
    setImageURL("");
    setInput("");
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={user.photoURL} />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="post__input"
            placeholder={`What's on your mind,${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="post__image"
            placeholder={`Article URL (Optional)`}
          />
          <button onClick={handleSubmit} type="submit">
            Submit Post
          </button>
        </form>
      </div>
      <div className="post__bot">
        <div className="post__option red-hover">
          <Videocam style={{ color: "#f64f69" }} />
          <h3>Go Live</h3>
        </div>
        <div className="post__option green-hover">
          <PhotoLibrary style={{ color: "#2ecc71" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="post__option yellow-hover">
          <InsertEmoticon style={{ color: "#f1c40f" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
