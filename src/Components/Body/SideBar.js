import React from "react";
import "../../Styles/SideBar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://d2k4rtwxmqgfh9.cloudfront.net/images/logo.png"
        alt=""
      />
      <p>All Items Donated</p>
      <div className="sidebar__options">
        <p>Donated Items by branch</p>
        <hr />
        <p>Eden Prairie</p>
        <p>Minneapolis</p>
      </div>
    </div>
  );
}

export default SideBar;
