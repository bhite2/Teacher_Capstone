import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import Select from "react-select";

const subject_options = [
  {value: 'reading', label: 'Reading'},
  {value: 'math', label: 'Math'},
  {value: 'science', label: 'Science'},
]
const grade_options = [
  { value: 0, label: 'K' },
  { value: 1, label: '1st' },
  { value: 2, label: '2nd' },
  { value: 3, label: '3rd' },
  { value: 4, label: '4th' },
  { value: 5, label: '5th' },
  { value: 6, label: '6th' },
  { value: 7, label: '7th' },
  { value: 8, label: '8th' },
  { value: 9, label: '9th' },
  { value: 10, label: '10th' },
  { value: 11, label: '11th' },
  { value: 12, label: '12th' },
]



const EditResource = (props) => {
  // grade_level: [{id: 1, level: "K"}, {id: 2, level: "1st"}]
  // defaultValues={[{value: "K", label: "K"}, {value: "1st", label: "1st"}]}
console.log(props)
    const [user, token] = useAuth();
    const {resourceID} = useParams();
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[subject, setSubject] = useState(null)
    const[grade_level, setGradeLevel] = useState(null)
    const[file, setFile] = useState(null)

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
    
    let defaultValues = props.resourceDetails.grade_level.map(el => {
      return (
        {value: el.level, label: el.level}
      )
    } )
    console.log(defaultValues)

    return ( 
      <div>

        <div>
          <button data-toggle="modal" data-target="#exampleModal">Edit</button>
        </div>

        <div id="exampleModal" class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form method="post"  className='form-grid'>
                <div className='form-group'>
                    <label>Title:</label>
                    <input type='text' className='form-title' value={props.resourceDetails.title} onChange={(event) => setTitle(event.target.value)}/>    
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <input type='textarea' className='form-description' value={props.resourceDetails.description} onChange={d} />

                </div>
                <div className='form-group'>
                    <label>Subject:</label>
                    <Select className='form-description'  options={subject_options} value={{ value: props.resourceDetails.subject, label: props.resourceDetails.subject }} onChange={d}/>
                </div>
                <div className='form-group'>
                    <label>Grade Level:</label>
                    <Select className='form-control' isMulti options={grade_options} value={defaultValues} onChange={d} />
                </div>
                <div className='form-group'>
                    <label>File:</label>
                    <input type='file' className='form-control'/>

                </div>
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
              <button type="button" class="btn btn-primary" onClick={EditResource}>Save changes</button>
            </div>
           </div>
          </div>
        </div>

      </div>

      


     );
}
 
export default EditResource;