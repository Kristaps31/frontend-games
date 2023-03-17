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
    console.log(review_id)
    return Api.get(`/reviews/${review_id}/comments`)
    .then((data) => {
        const comments = data.data.comments
    return comments;
}).catch((error)=> {
    if(error)
    console.log(error.response.data.msg)
})
}

export const postCommentByReviewId = (body, votes, author, review_id, created_at) => {
    console.log(body, votes, author, review_id, created_at)
    return Api.post (`/reviews/$(review_id)/comments`, {body, votes, author, review_id, created_at})
    .then((data) => {
        console.log(data);
        return data
    }).catch((error)=> {
        if(error)
        console.log(error.response.data.msg)
    })
}


