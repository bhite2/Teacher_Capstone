import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

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

  let reading = resources.filter(el => {
    return el.subject === 'reading';});
    console.log(reading)

  let math = resources.filter(el => {
    return el.subject === 'math';});
    console.log(math)
  
  let science = resources.filter(el => {
    return el.subject === 'science';});
    console.log(science)

  return (
    <div className="container">
      <div>
        <Link to={'/create'}>
        Create New Resource 
        </Link>
           
      </div>
      <div>
        <h1>{user.username} resources page!</h1>
      </div>
      <div className="flex-container">
        <div className="flex.a">
          <h2>Reading</h2>
            <ul className="flex-ul">
              {reading.map((reading) => {
                return (
                  <li key={reading.id}>{reading.title}</li>
                )
              })}
            </ul>
        </div>
        <div className="flex.b">
          <h2>Math</h2>
            <ul className="flex-ul">
              {math.map((math) => {
                return (
                  <li key={math.id}>{math.title}</li>
                )
              })}
            </ul>
        </div>
        <div className="flex.c">
          <h2>Science</h2>
            <ul className="flex-ul">
              {science.map((science) => {
                return (
                  <li key={science.id}>{science.title}</li>
                )
              })}
            </ul>
        </div>
      </div>
      
      <h4>Shared with Me</h4>
    </div>
  );
};

export default HomePage;
