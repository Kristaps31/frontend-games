import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById } from '../API';
import "../componenets_CSS/IndividualReview.css"
import Comments from './Comments';
import CommentBox from './CommentBox';


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
  <div>
  <div className='review'>

    <h2 className="title">{gameReview.title}</h2>
    <img className='picture' src={gameReview.review_img_url} />
    <p className='designer'>Game By: {gameReview.designer}</p>
    <p className='category'>Game Category: {gameReview.category}</p>
    <p className='reviewAuthor'>Review By: {gameReview.owner}</p>
    <p className='likes'>Likes: {gameReview.votes}</p>
    <p className='date'>Created At: {gameReview.created_at}</p>
    <p className='text'>{gameReview.review_body}</p>
  </div>
  <CommentBox />
  <Comments />
  </div>

  )
}

export default IndividualReview