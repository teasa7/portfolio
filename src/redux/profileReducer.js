const ADD_REVIEW= 'ADD-REVIEW';
const UPDATE_REVIEW_TEXT = 'UPDATE-REVIEW-TEXT';

let initialState = {
  reviews: [
    {id: 1, text: 'Hello world!'},
    {id: 2, text: 'My first review!'}
  ],
  newReviewText: ''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_REVIEW:
      let newReview = {
        id: 3,
        text: state.newReviewText
      }
      state.reviews.push(newReview);
      state.newReviewText = '';
      return state;
    case UPDATE_REVIEW_TEXT:
      state.newReviewText = action.newText;
      return state;
    default:
      return state;
  }
}

export let addReviewCreator = () => ({ type: ADD_REVIEW });
export let changeReviewCreator = (newText) => ({ type:    UPDATE_REVIEW_TEXT, newText: newText});

export default profileReducer;