import "../componenets_CSS/TopReviews.css"

const ReviewCard = (review) => {
    return (
      <section className="review-card">
        <li>
          <img className="review-img" src={review.review.review_img_url} alt="visual representation of review" />
          <div className="review-info">
            <h4 className="review-title">{review.review.title}</h4>
            <p className="review_body">{review.review.review_body}</p>
            <p className="review-category">Category: {review.review.category} Likes: {review.review.votes}</p>
          </div>
        </li>
      </section>
    )
  }
  
  export default ReviewCard
  