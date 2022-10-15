import "./comments.css";
import Comment from "../Comments/Comment/Comment";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getAllComments } from "../../services/getAllCommentsService";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  // const postCommentHandler = (comment) => {
  //   axios
  //     .post("http://localhost:3001/comments", {
  //       ...comment,
  //       postId: 10,
  //     })
  //     .then((res) => axios.get("http://localhost:3001/comments"))
  //     .then((res) => setComments(res.data))
  //     .catch();
  // };

  const renderComments = () => {
    let renderedValue = <p>loading...</p>;

    if (error) {
      renderedValue = <p>fetching data failed !</p>;
      toast.error("there is an error !");
    }

    if (comments && !error) {
      renderedValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment name={c.name} email={c.email} />
        </Link>
      ));
    }
    return renderedValue;
  };

  return <section>{renderComments()}</section>;
};

export default CommentsList;
