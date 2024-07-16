import React, { useState } from "react";
import "./Post.css";
import Header from "./Header";

export default function Post({ addPost, kullanici }) {
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (postText.trim() !== "") {
      const newPost = {
        name: kullanici.isim,
        avatar: "https://picsum.photos/200/300?5",
        text: postText,
        clock: new Date().toISOString(),
        id: Date.now().toString(),
        likes: 0,
        liked: false,
      };
      addPost(newPost);
      setPostText("");
    }
  };

  return (
    <div className="post">
      <Header />
      <div className="post-content">
        <img
          src="https://picsum.photos/200/300?5"
          alt="Profil Resmi"
          className="profile-img"
        />
        <textarea
          rows={5}
          cols={80}
          placeholder="Ne oluyor?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
        <button className="text-button" onClick={handlePost}>
          Gönder
        </button>
      </div>
    </div>
  );
}
