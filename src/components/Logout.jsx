import React from "react";
import LocalClients from "./LocalClients";
import NriClient from "./NriClient";
import "./Admin.css"

function Logout({ handleLogout }) {
  return (
    <div className="my-data">
      <button onClick={handleLogout}>Logout</button>
      <NriClient />
      <LocalClients />
    </div>
  );
}

export default Logout;
