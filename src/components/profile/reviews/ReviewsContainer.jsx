import React from "react";
import Reviews from "./Reviews";
import { addReview, changeReview } from "./../../../redux/profileReducer"
import { connect } from 'react-redux';

// const ReviewsContainer = () => {
//   return (
//     <StoreContext.Consumer> 
//       { store => {
//           let addReview = () => {
//             store.dispatch(addReviewCreator());
//           }

//           let changeReview = (text) => {
//             store.dispatch(changeReviewCreator(text));
//           }  

//           <Reviews reviews={store.getState().profilePage.reviews} newReviewText={store.getState().profilePage.newReviewText} changeReview={changeReview} addReview={addReview} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    reviews: state.profilePage.reviews,
    newReviewText: state.profilePage.newReviewText
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addReview: () => {
//       dispatch(addReviewCreator());
//     },
//     changeReview: (text) => {
//       dispatch(changeReviewCreator(text));
//     }
//   }
// }

const ReviewsContainer = connect(mapStateToProps, {addReview, changeReview})(Reviews);

export default ReviewsContainer;