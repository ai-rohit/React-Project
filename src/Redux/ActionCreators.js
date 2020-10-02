import * as ActionTypes from "./ActionTypes";

// addComment function is an action creator which return an action as Object
// The action object consists of type imported from ActionTypes.js and payload which contains  the data that needs to be carried out
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})