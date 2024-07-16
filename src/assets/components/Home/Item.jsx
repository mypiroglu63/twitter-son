import React, { useEffect, useState } from "react";
import "./Item.css";

export default function Item({ posts }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "https://662d5eb7a7dda1fa378a7b67.mockapi.io/kaynak";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const itemsWithLikes = data.map((item) => ({
          ...item,
          likes: Math.floor(Math.random() * 100),
          liked: false,
        }));
        setItems(itemsWithLikes);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  useEffect(() => {
    setItems((prevItems) => [...posts, ...prevItems]);
  }, [posts]);

  const handleLike = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
              liked: !item.liked,
            }
          : item
      )
    );
  };

  return (
    <div>
      {items.map((item) => (
        <div className="post" key={item.id}>
          <div className="post-header">
            <img src={item.avatar} alt={item.name} className="profile-imgs" />
            <div className="post-header-text">
              <span className="post-name">{item.name}</span>
              <span className="post-clock">
                {new Date(item.clock).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="post-content">
            <div className="post-description">{item.text}</div>
            <img src={item.avatar} alt={item.name} className="post-image" />
            <div className="post-actions">
              <button
                className={`like-button ${item.liked ? "liked" : ""}`}
                onClick={() => handleLike(item.id)}
              >
                {item.liked ? "Beğenmekten Vazgeç" : "Beğen"}
              </button>
              <span className="like-count">{item.likes} Beğeni</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
