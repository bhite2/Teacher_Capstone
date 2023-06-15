import React, {useState, useEffect} from "react";
import axios from "axios";
import CommentForm from "../CommentsForm/CommentsForm";
import CommentList from "../CommentsList/CommentsList";

const Comment = (props) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
      allComments();
    }, [])
  
    async function allComments() {
      const response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.resourceId}/`)
      console.log(response.data);
      setComments(response.data);
    }


    return ( 
        <div>
            <div>
                <CommentList comments={comments}/>
            </div>
            <div>
                <CommentForm allComments= {allComments} resourceId={props.resourceId}/>
            </div>
            
        </div>

     );
}
 
export default Comment;