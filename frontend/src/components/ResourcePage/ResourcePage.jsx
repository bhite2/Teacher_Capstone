import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



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
          {resourceDetails && <div>
            <div>
              {resourceDetails.title}
            </div>
            {resourceDetails.description}
            {resourceDetails.grade_level && resourceDetails.grade_level.map(grade => <p>{grade.level}</p>)}
            </div>}  
            
                  
                
        
        </div>
     );
}
 
export default ResourcePage;