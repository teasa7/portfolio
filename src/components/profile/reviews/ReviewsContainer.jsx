import React from "react";
import Reviews from "./Reviews";
import { addReviewCreator, changeReviewCreator } from "./../../../redux/profileReducer"


const ReviewsContainer = (props) => {
  let state = props.store.getState();

  let addReview = () => {
    props.store.dispatch(addReviewCreator());
  }

  let changeReview = (text) => {
    props.store.dispatch(changeReviewCreator(text));
  }  

  return (
    <Reviews reviews={state.profilePage.reviews} newReviewText={state.profilePage.newReviewText} changeReview={changeReview} addReview={addReview} />
  )
}

export default ReviewsContainer;