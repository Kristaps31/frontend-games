import axios from "axios";


const reviewApi = axios.create({
    baseURL: "https://backend-project-hosting.onrender.com/api"
})

export const getReviews = () => {
    return gamesApi.get('/reviews').then(({ data }) => {
        console.log(data)
        return data.reviews;
    })
};

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
