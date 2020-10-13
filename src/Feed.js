import React, { useEffect } from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import Post from "./Post";
import Posts from "./Posts";
import db from "./firebase";
import { useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      {/* fb reels */}
      <StoryReel />
      {/* post area */}
      <Post />
      {/* posts */}
      {posts.map((post) => (
        <Posts
          key={post.id}
          profileImg={post.data.profileSrc}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
