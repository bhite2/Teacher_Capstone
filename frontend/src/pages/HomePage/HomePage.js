import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/resources/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setResources(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchResources();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <h4>MyResources</h4>
      {resources &&
        resources.map((resource) => (
          <p key={resource.id}>
            {resource.title} {resource.grade_level.map((element) => element.level)}
          </p>
        ))}
      <h4>Shared with Me</h4>
    </div>
  );
};

export default HomePage;
