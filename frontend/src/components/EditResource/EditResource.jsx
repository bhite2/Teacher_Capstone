import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ModalBG = styled.div`
CSS TBD`

const ModalBody = styled.div`
CSS TBD`



const EditResource = (props) => {

    const [user, token] = useAuth();
    const {resourceID} = useParams();
    const [shouldShow, setShouldShow] = useState(false)

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
      <div>
        <button onClick={() => setShouldShow(true)}>Edit</button>
        {
          shouldShow && (
              <ModalBG onClick={() => setShouldShow(false)}>
                <ModalBody onClick={(e) => e.stopPropagation}>
                  <button>Save Changes</button>
                </ModalBody>
              </ModalBG>
          )
        }
      </div>


     );
}
 
export default EditResource;