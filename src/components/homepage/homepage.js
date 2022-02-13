import React from "react";
import "./homepage.css";

const Homepage = ({ updateUser, name }) => {
  return (
    <div className="homepage">
      <h1>Welcome {name}! </h1>

      <div className="button" onClick={() => updateUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
