import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();
  const [resources, setResources] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  useEffect(() => {
    const userFavorites = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/favorites/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setFavorites(response.data);
       
      } catch (error) {
        console.log(error.message);
      }
    };
    userFavorites();
  }, [token]);

  let reading = resources.filter(el => {
    return el.subject === 'Reading';});
    console.log(reading)

  let math = resources.filter(el => {
    return el.subject === 'Math';});
    console.log(math)
  
  let science = resources.filter(el => {
    return el.subject === 'Science';});
    console.log(science)

  let subject = favorites.flatMap((favorite) => {
    return (
      favorite.favorites.map(el => el.subject)
    )})
    console.log(subject)


  // let readingf = favorites.favorites.filter(el => {
  //   return el.subject === "Reading"})
  // console.log(readingf)

  // let mathf = favorites.filter(el => {
  //   return subject.includes(el.favorites.subject)})
  // console.log(mathf)

  // let sciencef = favorites.favorites.filter(el => {
  //   return el.subject === "Science"})
  // console.log(sciencef)



  return (
    <div>
      <div className="create">
        <Link to={'/create'}>
        Create New Resource 
        </Link>     
      </div>
      <div className="flex-container">
        <div>
          <h1>{user.username} resources page!</h1>
        </div>
        <div className="flex-container.a">
          <div>
            <h2>Reading</h2>
              <ul className="flex-ul">
                {reading.map((reading) => {
                  return (
                    <li key={reading.id}>{reading.title}</li>
                  )
                })}
              </ul>
          </div>
          <div>
            <h2>Math</h2>
              <ul className="flex-ul">
                {math.map((math) => {
                  return (
                    <li key={math.id}>{math.title}</li>
                  )
                })}
              </ul>
          </div>
          <div>
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
      <div>
        <h2>Favorites</h2>
        <ul>
        </ul>
      </div>
      </div>
    </div>

  );
};

export default HomePage;
