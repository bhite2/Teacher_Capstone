import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import './ResourcesPage.css'
import FiveStarView from "../FiveStarView/FiveStarView";

const ResourcesPage = (props) => {

    const [resources, setResources] = useState([]);
    const [filteredResources, setFilteredResources] =  useState([]);
    
   

    async function allResources() {
        const response = await axios.get('http://127.0.0.1:8000/api/resources/all/');
        console.log(response.data);
        setResources(response.data);
    }

      useEffect(() => {
        allResources();
      }, []);

      const handleChange = (e) => {
        const results = resources.filter(resource => {
            if (e.target.value === "") return resources
            return resource.title.toLowerCase().includes(e.target.value.toLowerCase()) || resource.subject.toLowerCase().includes(e.target.value.toLowerCase()) 
            || resource.grade_level.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(results)}
       
    


    return ( 
        <div>
        <div>
          <SearchBar filteredResources={filteredResources} setFilteredResources={setFilteredResources} handleChange={handleChange}/>
        </div>
        <div className="grid-container" key={resources.id}>
             {resources.map((resource) => {
          return (
            <div className="file_image">
              <Link to={`/resource/${resource.id}`}>
                  <div className="title">{resource.title}</div>
              </Link>
              <div>{resource.subject}</div>
              <div className="grade_level">{resource.grade_level.map((element) => element.level)}  </div>
              <FiveStarView/>
            </div>
          );
        })}
        </div>
      </div>
    );
}
export default ResourcesPage;