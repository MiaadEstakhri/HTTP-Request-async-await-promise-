import { useEffect, useState } from "react";
import "./fullComment.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComment } from "../../services/getOneCommentService";
import { useNavigate, useParams } from "react-router-dom";

const FullComment = () => {
  let params = useParams();
  let commentId = params.id;
  let navigate = useNavigate();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      navigate("/");
      setComment(null);
    } catch (error) {}
  };

  let commentDetail = <p>please select a comment ! </p>;

  if (commentId) commentDetail = <p>loading ...</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.content}</p>
        <button className="btnDelete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
