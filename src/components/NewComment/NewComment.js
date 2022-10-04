import { useState } from "react";
import "./newComment.css";
import { addNewComment } from "../../services/addNewCommentsService";
import { getAllComments } from "../../services/getAllCommentsService";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await addNewComment({ ...comment, postId: 10 });
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <h2>Add new comment</h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div className="formControl">
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div className="formControl">
        <label>body</label>
        <textarea type="textarea" onChange={changeHandler} name="content" />
      </div>
      <div className="formControl">
        <button className="btn" onClick={() => postCommentHandler(comment)}>
          add new comment
        </button>
      </div>
    </div>
  );
};

export default NewComment;
