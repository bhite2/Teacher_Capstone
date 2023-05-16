import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const EditResource = (props) => {

    const [user, token] = useAuth();
    const {resourceID} = useParams();

    async function EditResource() {

      let editResource = {
        title:"",
        description:"",
        subject: "",
        grade_level: "",
        file: "",
      }
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/resources/edit/${resourceID}/`, editResource,
            {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "multipart/form-data",
                },
              });
            if(response.status === 204){
              console.log(response.data)
                
            }
        } catch (error) {
            console.log(error.response);
          }

    }
    

    return ( 
        <button type="submit" onClick={EditResource}>Edit</button>
     );
}
 
export default EditResource;