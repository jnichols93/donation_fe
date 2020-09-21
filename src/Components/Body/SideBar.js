import React from "react";
import "../../Styles/SideBar.scss";
import { useStateValue } from "../../Utils/StateProvider";
import { auth } from "../../firebase";
import { useHistory, Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";

function SideBar() {
  const [{ user }] = useStateValue();
  const history = useHistory();

  const signout = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://d2k4rtwxmqgfh9.cloudfront.net/images/logo.png"
        alt=""
      />
      <div className="sidebar__user">
        <p>{user?.email}</p>
        <p>Add Accounts</p>
        <p>Add Items</p>
        <button onClick={signout}>signout</button>
      </div>
      <br />
      <p>Items On-Hand</p>
      <p>All Items Donated</p>
      <div className="sidebar__options">
        <p>Donated Items by branch</p>
        <hr />
        <Link to="/ep">
          <p>Eden Prairie</p>
        </Link>
        <Link to="/mpls">
          <p>Minneapolis</p>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
