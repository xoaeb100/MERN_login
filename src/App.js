import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  const name = user.name;

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")));
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
    console.log(user.name);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Homepage updateUser={updateUser} name={name} />
            ) : (
              <Login updateUser={updateUser} />
            )}
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser} />{" "}
          </Route>
          <Route path="/register">
            <Register />{" "}
          </Route>
        </Switch>
      </Router>
      {/* <Homepage />
      <Login />
      <Register /> */}
    </div>
  );
}
export default App;
