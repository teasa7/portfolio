import React from "react";
import styles from "./Reviews.module.css";
import Review from "./review/Review";

const Reviews = (props) => {
  let reviewsElements = props.reviews.map( review => <Review key={review.id} text={review.text} />)
  
  let newReviewElement = React.createRef();

  let onAddReview = () => {
    props.addReview();
  }

  let onChangeReview = () => {
    let newText = newReviewElement.current.value;
    props.changeReview(newText);
  }  

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        <textarea ref={newReviewElement} value={props.newReviewText} onChange={onChangeReview} />
        <button onClick={onAddReview}>Add review</button>
      </div>
      <div className={styles.reviews}>
        {reviewsElements}
      </div>
    </div>
  )
}

export default Reviews;