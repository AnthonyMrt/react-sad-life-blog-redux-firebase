import { onAuthStateChanged } from "firebase/auth";
//import { updateDoc, doc } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions/post.action";
import { auth } from "../utils/firebase";
import CommentCard from "./CommentCard";

const CommentPosts = ({ post }) => {
  const [user, setUser] = useState(null);
  const anwserContent = useRef();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleComment = (e) => {
    e.preventDefault();

    let data = [];

    if (post.comments === null) {
      data = [
        {
          commentAuthor: user.displayName,
          text: anwserContent.current.value,
        },
      ];
    } else {
      data = [
        ...post.comments,
        {
          commentAuthor: user.displayName,
          text: anwserContent.current.value,
        },
      ];
      //dispatch
    }

    dispatch(addComment(post.id, data));
    anwserContent.current.value = "";
  };

  return (
    <div className="comment-container">
      <h5 className="comment-title">Commentaires</h5>
      {post.comments &&
        post.comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />;
        })}
      {user ? (
        <form onSubmit={(e) => handleComment(e)}>
          <textarea
            placeholder="Envoyer un commentaire"
            ref={anwserContent}
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      ) : (
        <p>Vous devez être connecter pour poster un commentaire.</p>
      )}
    </div>
  );
};

export default CommentPosts;
