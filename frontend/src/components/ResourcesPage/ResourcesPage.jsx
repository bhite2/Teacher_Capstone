import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import './ResourcesPage.css'
import FiveStarView from "../FiveStarView/FiveStarView";

const ResourcesPage = (props) => {

    const [resources, setResources] = useState([]);
    const [searchInput, setSearchInput] = useState("");
   

    async function allResources() {
        const response = await axios.get('http://127.0.0.1:8000/api/resources/all/');
        console.log(response.data);
        setResources(response.data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        allResources();
      };
    
      useEffect(() => {
        allResources();
      }, []);
    


    return ( 
        <div>
        <div className="searchbar">
          <SearchBar
            search={searchInput}
            setSearch={setSearchInput}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="grid-container" key={resources.id}>
             {resources.map((resource) => {
          return (
            <div className="file_image">
              <Link to={`/resource/${resource.id}`}>
                  <div className="title">{resource.title}</div>
              </Link>
              <div className="grade_level">{resource.grade_level.map((element) => element.level)}</div>
              <FiveStarView/>
            </div>
          );
        })}
        </div>
      </div>
    );
}
 
export default ResourcesPage;