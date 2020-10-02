import * as ActionTypes from "./ActionTypes";
import {DISHES} from "../shared/dishes";

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
});

export const fetchDishes = ()=> (dispatch)=> {
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    }, 2000)
}

export const dishesLoading = ()=>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});