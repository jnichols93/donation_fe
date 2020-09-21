import React, { Children } from "react";
import "../../Styles/Item.scss";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";

function Item({
  id,
  photoUrl,
  description,
  category,
  branch,
  dateCollected,
  donatedBy,
  donatedTo,
  dateDonated,
}) {
  return (
    <div className="item">
      <div className="item__left">
        <p>
          <b>{id}</b>
        </p>
        <img src={photoUrl} />
      </div>
      <div className="item__section">
        <p>
          <b>{branch}</b>
        </p>
      </div>
      <div className="item__section">
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <div className="item__section">
        <p>Client: {donatedBy}</p>

        <p>Pickup: {dateCollected}</p>
      </div>
      <div className="item__section">
        <p>Dropped off: {dateDonated}</p>
        <p>Donated to: {donatedTo}</p>
      </div>
      <div className="item__links">
        <ReceiptRoundedIcon />
      </div>
    </div>
  );
}

export default Item;
