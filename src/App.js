import React, { useEffect } from "react";
import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./Components/Body/Body";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Utils/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup here
      unsubscribe();
    };
  }, []);

  console.log("USER HERE >>>>>>", user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            {!user && <Login />}
            {user && <Body />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
