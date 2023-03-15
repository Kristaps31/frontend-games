import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://backend-project-hosting.onrender.com/api"
})

export const getReviews = () => {
    return gamesApi.get('/reviews').then(({ data }) => {
        console.log(data)
        return data.reviews;
    })
};