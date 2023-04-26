import React, {useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CreateResourcePage = (props) => {

    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[subject, setSubject] = useState('')
    const[grade_level, setGradeLevel] = useState('')
    const[file, setFile] = useState('')
    const[user, token] = useAuth();

    
    async function CreateResource(newResource) {
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/resources/post/', newResource, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
            if(response.status === 201){
                await props.allResources()
            }
        } catch (error) {
            console.log(error.response.data);
          }

    }

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = new FormData();
        newEntry.append('title', title)
        newEntry.append('description', description)
        newEntry.append('subject', subject)
        newEntry.append('grade_level', grade_level)
        newEntry.append('file', file)
        console.log(newEntry);
        CreateResource(newEntry)

        }

    return ( 
        
        <form method="post" onSubmit={handleSubmit} className='form-grid'>
            <h3>Create New Resource</h3>
        <div className='form-group'>
            <label>Title:</label>
            <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>    
        </div>
        <div className='form-group'>
            <label>Description:</label>
            <input type='textarea' className='form-control' value={description} onChange={(event) => setDescription(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Subject:</label>
            <input type='text' className='form-control' value={subject} onChange={(event) => setSubject(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Grade Level:</label>
            <input type="checkbox"className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="gradek"> K</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade1"> 1st</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade2"> 2nd</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade3"> 3rd</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade4"> 4th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade5"> 5th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade6"> 6th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade7"> 7th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade8">8th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade9">9th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade10">10th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade11"> 11th</label><br></br>
            <input type="checkbox" className='form-control' value={grade_level} onChange={(event) => setGradeLevel(event.target.value)}></input>
            <label for="grade12"> 12th</label><br></br>
        </div>
        <div className='form-group'>
            <label>File:</label>
            <input type='file' className='form-control' value={file} onChange={(event) => setFile(event.target.value)}/>

        </div>
        <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
    </form>
     );
}
 
export default CreateResourcePage;