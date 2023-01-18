import React from "react";
import "./style.css";
export function Book({ isLoading }) {
  return (
    <div className={`book-container container-box ${!isLoading && `fade-out`}`}>
      <div className="card">
        <div className="left box">
          <h1>يا</h1>
        </div>
        <div className="right box">
          <h1>ايش</h1>
        </div>
        <div className="back box">
          <h1>السالفة</h1>
        </div>
        <div className="front box">
          <h1>ترى</h1>
        </div>
        <div className="top box"></div>
        <div className="bottom box"></div>
      </div>
    </div>
  );
}
