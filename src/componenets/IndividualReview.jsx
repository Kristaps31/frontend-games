import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react'
import { getReviewsById } from '../API';
import "../componenets_CSS/IndividualReview.css"

function IndividualReview() {
    const {review_id} = useParams();
    const [gameReview, setGameReview] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getReviewsById(review_id).then((game) => {
            setGameReview(game);
            setLoading(false);
        })
    }, []);

    if (loading) return <p className='single'>Hang on, loading... </p>;

  return (
    <div className='parent'>

    <h2 className="div1">{gameReview.title}</h2>
    <img className='div2' src={gameReview.review_img_url} />
    <p className='div3'>Game By: {gameReview.designer}</p>
    <p className='div4'>Game Category: {gameReview.category}</p>
    <p className='div5'>Review By: {gameReview.owner}</p>
    <p className='div6'>Likes: {gameReview.votes}</p>
    <p className='div7'>Created At: {gameReview.created_at}</p>
    <p className='div8'>{gameReview.review_body}</p>
    </div>
  )
}

export default IndividualReview