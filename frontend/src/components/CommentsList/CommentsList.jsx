import React from "react";


const CommentList = (props) => {

  return ( 
    
    <div>
      <h3>Comments</h3>
      {props.comments.map((comment) => {
        return (
          
          <div>
          {comment.user.username}: {comment.text}
          </div>
      )
     })}
    </div>
  );
  
}

 
export default CommentList;