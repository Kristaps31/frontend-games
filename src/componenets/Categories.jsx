import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../API";
import ReviewCard from './ReviewCard';


function Categories() {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { category } = useParams;

    useEffect(() => {
        setIsLoading(true)
        getItemsByCategory(category).then((results) => {
            setResults(results)
        setIsLoading(false)
        })
    }, [category])


  return (
    <section>
    <h2>Reviews by category {category}</h2>
    {isLoading ? (
      <p> Loading... </p>
    ) : (
      <ul>
        {results.map((reviews) => {
          return <ReviewCard key={reviews.review_id} review={reviews} />;
        })}
      </ul>
    )}
  </section>
  )
}

export default Categories;