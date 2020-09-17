import React from "react";
import "../../Styles/Body.scss";

function Info() {
  return (
    <div className="info">
      <div className="info__box">
        <div className="info__right">
          <h2>Branch:</h2>
          <h1>Eden Prairie</h1>
          <br />
          <p>Total items donated: 45</p>
          <p>Items Ready for Donation: 10</p>
        </div>
        <div className="info__left">
          <p>Last Donation Run Made</p>
          <p>12/13/2020</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
