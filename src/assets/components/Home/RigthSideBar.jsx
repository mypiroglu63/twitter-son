import React from "react";
import "./RigthSideBar.css";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <div className="trends-container">
        <h3 style={{ textAlign: "start" }}>Trends For You</h3>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">News · Trendings</div>
            <div className="trend-name">#deprem</div>
            <div className="trend-count">17.6K posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">News · Trending</div>
            <div className="trend-name">#SONDAKİKA</div>
            <div className="trend-count">9,480 posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Entertainment · Trending</div>
            <div className="trend-name">#SerenaySarıkaya</div>
            <div className="trend-count">2,411 posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Trending in Turkey</div>
            <div className="trend-name">#MemuraYüzde50Zam</div>
            <div className="trend-count">18.6K posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Entertainment · Trending</div>
            <div className="trend-name">#AfraSaraçoğlu</div>
            <div className="trend-count">9,424 posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Trending in Turkey</div>
            <div className="trend-name">#BizimÇocuklar</div>
            <div className="trend-count">10.3K posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Sports · Trending</div>
            <div className="trend-name">Morata</div>
            <div className="trend-count">7,035 posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Sports · Trending</div>
            <div className="trend-name">Transfer</div>
            <div className="trend-count">85.4K posts</div>
          </div>
        </div>
        <div className="trend-item">
          <div className="trend-content">
            <div className="trend-category">Trending in Turkey</div>
            <div className="trend-name">#dilanpolat</div>
            <div className="trend-count">5,872 posts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
