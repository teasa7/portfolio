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
      <div className={styles.block_input}>
        <textarea ref={newReviewElement} value={props.newReviewText} onChange={onChangeReview} className={styles.input} />
        <button onClick={onAddReview} className={styles.button}>Add review</button>
      </div>
      <div className={styles.reviews}>
        {reviewsElements}
      </div>
    </div>
  )
}

export default Reviews;