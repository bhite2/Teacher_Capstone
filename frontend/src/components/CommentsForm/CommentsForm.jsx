import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {
  const [text, setText] = useState("");
  const [user, token] = useAuth();

  async function createComment(newComment) {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/",
        newComment,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        await props.allComments();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      video_id: props.videoId,
      text: text,

    };
    console.log(newComment);
    createComment(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter Comment: </label>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
    </form>
  );
};

export default CommentForm;
