import axios from "axios";

const reviewApi = axios.create({
    baseURL: "https://backend-project-hosting.onrender.com/api"
})

export const getReviewsById = (review_id) => {
    return reviewApi.get(`/reviews/${review_id}`)
    .then((data) => {
        const review = data.data.review
        console.log(review)
        return review;
    }).catch((error)=> {
        if(error.response)
        console.log(error)
    })
}