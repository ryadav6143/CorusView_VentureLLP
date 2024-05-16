"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import "firebase/database";
import { DataSnapshot, get, ref } from "firebase/database";
import database from "./firebase";
function NriClient() {
    const [data, setData] = useState([]);
  useEffect(() => {
    const dbRef = ref(database, "NRICLIENT", "Interested-Client");
    get(dbRef)
      .then((DataSnapshot) => {
        if (DataSnapshot.exists()) {
          const userArray = Object.entries(DataSnapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setData(userArray);
          console.log(userArray);
        } else {
          console.log("No data found");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="container-main">
        <div className="nri-container">
          <p>NRI-CLIENT</p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Comment</th>
                {/* Add other table headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="interested-container"> 
        </div>
      </div>
    </>
  );
}

export default NriClient
