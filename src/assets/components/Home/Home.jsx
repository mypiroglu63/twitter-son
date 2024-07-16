import React from "react";
import Navigation from "./Navigation";
import PostList from "./PostList";

import "./Home.css";
import RightSideBar from "./RigthSideBar";

export default function Home({ kullanici }) {
  return (
    <div className="root">
      <div className="container">
        <div className="section section-left">
          <Navigation kullanici={kullanici} />
        </div>
        <div className="section section-middle">
          <PostList kullanici={kullanici} />
        </div>
        <div className="section section-right">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
