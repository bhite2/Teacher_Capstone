import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

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
        <div className="grid-container">
             {resources.map((resource) => {
          return (
            <div className="videocard">
              {/* <div>
                <Link to={`/video/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.medium.url} />
                </Link>
              </div> */}
              <div className="title">{resource.title}</div>
              <div className="description">{resource.grade_level}</div>
            </div>
          );
        })}
        </div>
      </div>
    );
}
 
export default ResourcesPage;