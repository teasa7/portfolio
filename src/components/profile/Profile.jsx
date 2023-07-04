import React from "react";
import styles from "./Profile.module.css";
import user from "./user.jpg";
import bg from "./bg.jpg";
import { NavLink } from "react-router-dom";
import ReviewsContainer from "./reviews/ReviewsContainer";

const Profile = (props) => {
  return (
      <div>
          <div className={styles.profile}>
            <img src={bg} className={styles.back} alt="Background" />
            <div className={styles.user}>
              <img src={user} className={styles.img} alt="Logo" />
              <div className={styles.text}>
                <h3 className={styles.name}>Anastasia Chinyaeva</h3>
                <div className={styles.description}>
                  <p>Junior Frontend-developer</p>
                  <NavLink to="/profile/description">More</NavLink>
                </div>
              </div> 
            </div>
          </div>
          <ReviewsContainer store={props.store} />
      </div>
  )
}

export default Profile;