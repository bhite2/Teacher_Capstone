import React, {useState} from "react";
import axios from "axios";
import Select from "react-select";
import useAuth from "../../hooks/useAuth";
import "./CreateResource.css"
import { useNavigate } from "react-router-dom";


const subject_options = [
    {value: 'Reading', label: 'Reading'},
    {value: 'Math', label: 'Math'},
    {value: 'Science', label: 'Science'},
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


const CreateResourcePage = (props) => {

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[subject, setSubject] = useState(null)
    const[grade_level, setGradeLevel] = useState(null)
    const[file, setFile] = useState(null)
    const[user, token] = useAuth();

    
    async function CreateResource(newResource) {


        try {
            let response = await axios.post('http://127.0.0.1:8000/api/resources/post/', newResource, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "multipart/form-data",
                },
              });
            if(response.status === 201){
                
            }
        } catch (error) {
            console.log(error.response.data);
          }
          

    }

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = new FormData();
        let gradeArray = grade_level.map(el => el.value)
        newEntry.append('title', title)
        newEntry.append('description', description)
        newEntry.append('subject', subject.value)
        newEntry.append('grade_level', gradeArray)
        newEntry.append('file', file)
        console.log(newEntry);
        CreateResource(newEntry)
        setTitle('');
        setDescription('');
        setSubject(null);
        setGradeLevel(null);
        setFile(null);
        }


    return ( 
        
        <form method="post" onSubmit={handleSubmit} className='form-grid'>
            <h3 style={{'margin-top': '1em', 'margin-left': '30%'}}>Create New Resource</h3>
        <div className='form-group'>
            <label>Title:</label>
            <input type='text' className='form-title' value={title} onChange={(event) => setTitle(event.target.value)}/>    
        </div>
        <div className='form-group'>
            <label>Description:</label>
            <textarea  className='form-description'   rows= '3' cols='100' value={description} onChange={(event) => setDescription(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Subject:</label>
            <Select className='form-description' options={subject_options} value={subject} onChange={setSubject}/>
        </div>
        <div className='form-group'>
            <label>Grade Level:</label>
            <Select className='form-control' isMulti options={grade_options} value={grade_level} onChange={setGradeLevel}/>
        </div>
        <div className='form-group'>
            <label>File:</label>
            <input type='file' className='form-control' onChange={(event) => setFile(event.target.files[0])}/>

        </div>
        <button type='submit' className='btn btn-primary'  style={{'margin-top': '1em', 'margin-left': '30%'}}>Create</button>
    </form>
     );
}
 
export default CreateResourcePage;