import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById, upVoteReview, downVoteReview } from '../API';
import "../componenets_CSS/IndividualReview.css"
import Comments from './Comments';


function IndividualReview() {
    const {review_id} = useParams();
    const [gameReview, setGameReview] = useState({});
    const [loading, setLoading] = useState(true);
    const [userVote, setUserVote] = useState(0);
    const [votingError, setVotingError] = useState(false);
    const [totalVotes, setTotalVotes] = useState(0) 
  
    const hasUpVoted =
    userVote === 1 || localStorage.getItem(review_id) === "upVoted";

    const hasDownVoted =
    userVote === -1 || localStorage.getItem(review_id) === "downVoted";

    const upVote = () => {
      setVotingError(false);
      setUserVote(1);
      setTotalVotes(totalVotes + 1)
      localStorage.setItem(review_id, "upVoted");
      upVoteReview(review_id).catch(() => {
        setUserVote(0);
        setVotingError(true);
      })
    }
    
    const downVote = () => {
      setVotingError(false);
      setUserVote(-1);
      setTotalVotes(totalVotes - 1)
      localStorage.setItem(review_id, "downVoted");
      downVoteReview(review_id).catch(() => {
        setUserVote(0);
        setVotingError(true);
      });
    }

    useEffect(() => {
        setLoading(true);
        getReviewsById(review_id).then((game) => {
            setGameReview(game);
            setTotalVotes(game.votes)
            setLoading(false);
        })
    }, [review_id]);

    if (loading) return <p className='single'>Hang on, loading... </p>;

  return (
  <div>
  <div className='review'>

    <h2 className="title">{gameReview.title}</h2>
    <img className='picture' src={gameReview.review_img_url} alt={gameReview.title} />
    <p className='designer'>Game By: {gameReview.designer}</p>
    <p className='category'>Game Category: {gameReview.category}</p>
    <p className='reviewAuthor'>Review By: {gameReview.owner}</p>

    <p className='likes'>
    Likes: { totalVotes }
    <button onClick={upVote} disabled={hasUpVoted}> Like</button>
    <button onClick={downVote} disabled={hasDownVoted}> Dislike</button>
    </p>
    
    <p className='date'>
    Created At: {gameReview.created_at}</p>
    <p className='text'>{gameReview.review_body}</p>
  </div>
  <Comments />
  </div>

  )
}

export default IndividualReview;