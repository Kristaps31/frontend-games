import React, { useEffect, useState } from "react";
import "../componenets_CSS/CommentBox.css";
import { Popup } from "./Popup";
import { postCommentByReviewId } from "../API";
import { useParams } from "react-router-dom";

function CommentBox() {
  const [openName, setOpenName] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [postedComment, setPostedComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  const submitComment = () => {
    let user = document.getElementById("user-name").value;
    let comment = document.getElementById("comment-input").value;

    if (user.length < 2) {
      setOpenName(true);
    } else if (comment.length < 1) {
      setOpenComment(true);
    } else {
      setIsLoading(true);
      postCommentByReviewId(comment, 0, user, review_id, Date.now())
        .then(() => {
          setIsLoading(false);
          setPostedComment(true);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    }
  };

  return (
    <div className="comment-div">
      <div className="comment-box">
        <input id="user-name" type="text" placeholder="Name" />
        <input
          id="comment-input"
          type="text"
          placeholder="Add a comment..."
          rows="4"
        />
      </div>

      <div className="comment-form-actions">
        <button className="commentButton" onClick={submitComment}>
          {isLoading ? "Posting..." : "Post"}
        </button>
      </div>
      {openName && (
        <Popup
          text="Name must be at least 2 characters"
          closePopup={() => setOpenName(false)}
        />
      )}
      {openComment && (
        <Popup
          text="Comment Cant be empty"
          closePopup={() => setOpenComment(false)}
        />
      )}
      {postedComment && (
        <Popup
          text="Comment been posted"
          closePopup={() => setPostedComment(false)}
        />
      )}
    </div>
  );
}

export default CommentBox;
