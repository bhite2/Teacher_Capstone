import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditResource from "../EditResource/EditResource";
import DeleteResource from "../DeleteResource/DeleteResource";
import './ResourcePage.css'
import FavoriteResource from "../FavoriteResource/FavoriteResource";
import FiveStarRate from "../FiveStarRate/FiveStarRate";
import Comment from "../Comments/Comments";



const ResourcePage = (props) => {
  
  const [resourceDetails,setResourceDetails] = useState();
  const {resourceID} = useParams();
 

  
  async function fetchResourceDetails() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/resources/${resourceID}/`
    );
    console.log(response);
    setResourceDetails(response.data);
  }

  useEffect(() => {
    fetchResourceDetails();
  }, [resourceDetails]);

    return ( 
    
        <div> 

          
            <div>
                <div className="user-interaction">
                  <div>
                    <EditResource resourceDetails={resourceDetails} resourceID={resourceID}/>
                  </div>
                  <div>
                    <DeleteResource resourceID={resourceID}/>
                  </div>
                  <div>
                    <FavoriteResource resourceDetails={resourceDetails}/>
                  </div>
                  
                </div>
            </div>

          {resourceDetails && 
          <div>
            <div className="resource-container">
                <div className="title" key={resourceDetails.id}>
                  {resourceDetails.title}
                  
                </div>
                <div className="description">
                  {resourceDetails.description}
                </div>
                <div>
                  {resourceDetails.subject}
                </div>
                <div>
                  {resourceDetails.grade_level && resourceDetails.grade_level.map(grade => grade.level + " ")}
                </div>
                <div>
                    <FiveStarRate resourceDetails={resourceDetails} resourceID={resourceID}/>
                </div>
            </div>

            <div>
              <Comment resourceId={resourceID} />
            </div>
            

          </div>}  
        </div>
     );
}
 
export default ResourcePage;