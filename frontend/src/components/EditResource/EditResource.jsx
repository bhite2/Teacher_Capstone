import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";

const subject_options = [
  { value: "Reading", label: "Reading" },
  { value: "Math", label: "Math" },
  { value: "Science", label: "Science" },
];
const grade_options = [
  { value: 0, label: "K" },
  { value: 1, label: "1st" },
  { value: 2, label: "2nd" },
  { value: 3, label: "3rd" },
  { value: 4, label: "4th" },
  { value: 5, label: "5th" },
  { value: 6, label: "6th" },
  { value: 7, label: "7th" },
  { value: 8, label: "8th" },
  { value: 9, label: "9th" },
  { value: 10, label: "10th" },
  { value: 11, label: "11th" },
  { value: 12, label: "12th" },
];

const EditResource = (props) => {
  const [user, token] = useAuth();
  const { resourceID } = useParams();
  const [editTitle, setEditTitle] = useState(props.resourceDetails?.title);
  const [editDescription, setEditDescription] = useState(props.resourceDetails?.description);
  const [editSubject, setEditSubject] = useState();
  const [editGrade, setEditGrade] = useState();
  const [editFile, setEditFile] = useState(null);

  //First time it rendered modal, editSubject was null making the subject select not display anything.
  //Cnaged it so it reassigned editSubject when the second render comes in
  useEffect(() => {
    let defaultValues = props.resourceDetails.grade_level?.map((el) => {
      return { value: el.level, label: el.level };
    });
    setEditGrade(defaultValues);
    setEditSubject ({
      value: props.resourceDetails.subject, label: props.resourceDetails.subject
    })

  }, [props.resourceDetails?.subject]);

  // useEffect(() => {
  //   let defaultSubjectValues = props.resourceDetails.subject?.map((el) => {
  //     return { value: el.subject, label: el.subject };  
  //   });
  //   (defaultSubjectValues);
  //   },[props.resourceDetails.subject]);
    

  const handleSubjectChange = (selected) => {
    setEditSubject(selected.value);
  }

  async function editResource() {
    const formData = new FormData();
    formData.append('title', editTitle)
    formData.append('description', editDescription)
    formData.append('subject', editSubject)
    formData.append('grade_level', editGrade);
    if (editFile) {
      formData.append('file', editFile)
    }
    try {
      let response = await axios.put(
        `http://127.0.0.1:8000/api/resources/edit/${resourceID}/`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,

            "Content-Type": "multipart/form-data",

          },
        }
      );
      if (response.status === 204) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

 

  return (
    props.resourceDetails && (
      <div>
        <div>
          <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit
          </button>
        </div>
        <div id="exampleModal" class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form method="post" className="form-grid">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      className="form-title"
                      // defaultValue={props.resourceDetails.title}
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <input
                      type="textarea"
                      className="form-description"
                      // defaultValue={props.resourceDetails.description}
                      value={editDescription}
                      onChange={(event) =>
                        setEditDescription(event.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject:</label>
                    <Select
                      className="form-description"
                      options={subject_options}
                      value={subject_options.find((option) => option.value === editSubject)}
                      onChange={handleSubjectChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Grade Level:</label>
                    <Select
                      className="form-control"
                      isMulti
                      options={grade_options}
                      value={editGrade}
                      onChange={setEditGrade}
                    />
                  </div>
                  {/* <div className="form-group" style={{"display":"flex","flexDirection":"column"}}>
                    <label style={{"fontSize":"14px"}}>File:{editFile}</label>
                    <input type="file" className="form-control" accept=""/>
                  </div> */}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={editResource}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditResource;
