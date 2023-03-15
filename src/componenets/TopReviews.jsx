import { useEffect, useState } from "react";
import { getReviews } from "../API";
import ReviewCard from "./ReviewCard";

function TopReviews() {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewData) => {
      setAllReviews(reviewData);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h2>Top reviews</h2>
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <ul>
          {allReviews.map((reviews) => {
            return <ReviewCard key={reviews.review_id} review={reviews} />;
          })}
        </ul>
      )}
    </section>
  );
}

export default TopReviews;
