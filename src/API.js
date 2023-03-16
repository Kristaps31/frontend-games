import axios from "axios";


const Api = axios.create({
    baseURL: "https://backend-project-hosting.onrender.com/api"
})

export const getReviews = () => {
    return Api.get('/reviews').then(({ data }) => {
        return data.reviews;
    })
};

export const getReviewsById = (review_id) => {
    return Api.get(`/reviews/${review_id}`)
    .then((data) => {
        const review = data.data.review
        return review;
    }).catch((error)=> {
        if(error.response)
        console.log(error.response.data.msg)
    })
};

export const getCommentsById = (review_id) => {
    return Api.get(`/reviews/${review_id}/comments`)
    .then((data) => {
        const comments = data.data.comments
    return comments;
}).catch((error)=> {
    if(error)
    console.log(error.response.data.msg)
})
};

export const upVoteReview = (review_id) => {
    return Api.patch(`/reviews/${review_id}`, {
        inc_votes: 1
    }).then(({data}) => {
        console.log(data.review.votes);
        return(data)
    })
}
export const downVoteReview = (review_id) => {
    return Api.patch(`/reviews/${review_id}`, {
        inc_votes: -1
    }).then(({data}) => {
        console.log(data.review.votes);
        return(data)
    })
}
