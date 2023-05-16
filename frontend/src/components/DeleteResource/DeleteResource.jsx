import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteResource = () => {

  let navigate = useNavigate();

  const [user, token] = useAuth();
  const {resourceID} = useParams();

   
  async function DeleteResource() {
      try {
          let response = await axios.delete(`http://127.0.0.1:8000/api/resources/edit/${resourceID}/`, 
          {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "multipart/form-data",
              },
            });
          if(response.status === 204){
            console.log("successfully deleted")
                
          };
          navigate("/")
      } catch (error) {
          console.log(error.response);
        }

  }

  

  return ( 
      <button type="submit" onClick={DeleteResource}>Delete</button>
  );
}
 
export default DeleteResource;