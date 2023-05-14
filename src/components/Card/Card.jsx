import React from 'react'
import styles from "./card.module.css";

function Card() {

  return (
    <div className={styles.card}>
        <div className={styles.text}>
            <div className={styles.title}>
                <h1>Get <span>insights</span> that help your business brow.</h1>
                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
            </div>
            <div className={styles.numbers}>
                <div>
                     <h4>10K+</h4>
                     <p>COMPANIES</p>
                </div>
                <div>
                     <h4>314</h4>
                     <p>TEMPLATES</p>
                </div>
                <div>
                     <h4>12M+</h4>
                     <p>QUERIES</p>
                </div>
            </div>
        </div>
        <div className={styles.image}>
            <div className={styles.color}></div>
        </div>
    </div>
  )
}

export default Card;