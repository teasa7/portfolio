import React from "react";
import styles from "./Reviews.module.css";
import Review from "./review/Review";

const Reviews = (props) => {
  let reviewsElements = props.reviews.map( review => <Review key={review.id} text={review.text} />)
  return (
    <div>
      <h2>Reviews</h2>
      <div>
        <textarea></textarea>
        <button>Add review</button>
      </div>
      <div className={styles.reviews}>
        {reviewsElements}
      </div>
    </div>
  )
}

export default Reviews;