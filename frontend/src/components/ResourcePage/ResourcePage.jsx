import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditResource from "../EditResource/EditResource";
import DeleteResource from "../DeleteResource/DeleteResource";



const ResourcePage = (props) => {
  
  const [resourceDetails,setResourceDetails] = useState({});
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
  }, []);

    return ( 
    
        <div>   
          {resourceDetails && 
          <div>
            <div>
              {resourceDetails.title}
            </div>
            <div>
              {resourceDetails.description}
            </div>
            <div>
              {resourceDetails.grade_level && resourceDetails.grade_level.map(grade => <p>{grade.level}</p>)}
            </div>
            <div>
              <EditResource resourceID={resourceID}/>
            </div>
            <div>
              <DeleteResource resourceID={resourceID}/>
            </div>

            
            
          </div>}  
            
                  
                
        
        </div>
     );
}
 
export default ResourcePage;