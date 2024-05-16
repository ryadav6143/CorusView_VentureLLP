import React, { useState } from "react";
import "./Admin.css";
import Login from "./Login";
import Logout from "./Logout";

function Adminpanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="admin-container1">
      <div className="admin-data">
        {!isLoggedIn ? (
          <Login handleLogin={handleLogin} />
        ) : (
          <Logout handleLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}

export default Adminpanel;
