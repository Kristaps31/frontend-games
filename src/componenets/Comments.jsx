import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {getCommentsById} from "../API";
import CommentCard from "./CommentCard";


function Comments() {
    const {review_id} = useParams();
    const [reviewComment, setReviewComment] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        getCommentsById(review_id).then((comments) => {
            setReviewComment(comments)
            setLoading(false)
        })
    },[]);

    if (loading) return <p className='single'>Hang on, loading... </p>;

  return (
    <div>
    <h3 className="commentTitle">Comments</h3>
    {loading ? ( <p> Loading Comments...</p>) : (
        <ul> 
        {reviewComment.map((comments) => { 
            return <CommentCard key={comments.review_id} comment={comments}  />;
    })}
    </ul>
    )}
    </div>
  )
}

export default Comments;
