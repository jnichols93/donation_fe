import React, { Children } from "react";
import "../../Styles/Item.scss";
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
        <p>{id}</p>
        <img src={photoUrl} />
      </div>

      <div className="item__description">
        <p>{description}</p>
      </div>
      <div className="item__client">
        <p>{donatedBy}</p>
      </div>
      <div className="item__collection">
        <p>{dateCollected}</p>
      </div>
      <div className="item__branch">
        <p>{branch}</p>
      </div>
    </div>
  );
}

export default Item;
