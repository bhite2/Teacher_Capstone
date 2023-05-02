import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const HomePage = () => {
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
    <div>
      <div>
        <h1>{user.username} resources page!</h1>
      </div>
      
      <div>
        <h4>Reading</h4>
          <ul>
            <li></li>
          </ul>
      </div>
      <div>
        <h4>Math</h4>
          <ul>
            <li></li>
          </ul>
      </div>
      <div>
        <h4>Science</h4>
          <ul>
            <li></li>
          </ul>
      </div>

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
