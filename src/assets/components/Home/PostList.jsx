import React, { useState } from "react";
import Post from "./Post";
import Item from "./Item";

export default function PostList({ kullanici }) {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Post addPost={addPost} kullanici={kullanici} />
      <Item posts={posts} />
    </div>
  );
}
