import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, getPosts } from "../redux/actions/post.action";

const Delete = ({ postId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(postId));
    dispatch(getPosts);
  };

  return (
    <span className="delete">
      <i className="fa-solid fa-trash-can" onClick={() => handleDelete()}></i>
    </span>
  );
};

export default Delete;
