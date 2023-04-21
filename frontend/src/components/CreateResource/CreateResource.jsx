import React, {useState} from "react";
import axios from "axios";

const CreateResource = (props) => {

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[subject, setSubject] = useState('')
    const[grade_level, setGradeLevel] = useState('')
    const[file, setSet] = useState('')

    async function CreateResource(newResource) {
        const response = await axios.post('http://127.0.0.1:8000/api/resources/', newResource);
        if(response.status === 201){
            await props.getAllResources()
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            description: description,
            subject: subject,
            grade_level: grade_level,
            file: file
        };
        console.log(newEntry);
        CreateResource(newEntry)
        }

    return ( 
        
        <form onSubmit={handleSubmit} className='form-grid'>
            <h3>Create New Resource</h3>
        <div className='form-group'>
            <label>Title:</label>
            <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>    
        </div>
        <div className='form-group'>
            <label>Description:</label>
            <input type='text' className='form-control' value={description} onChange={(event) => setDescription(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Subject:</label>
            <input type='text' className='form-control' value={subject} onChange={(event) => setSubject(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Grade Level:</label>
            <input type='text' className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>File:</label>
            <input type='file' className='form-control' value={file} onChange={(event) => setFile(event.target.value)}/>

        </div>
        <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
    </form>
     );
}
 
export default CreateResource;