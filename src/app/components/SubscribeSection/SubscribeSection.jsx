"use client";

import { useState } from "react";
import styles from "./SubscribeSection.module.css";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubscribe = () => {
    setTimeout(() => {
      setIsSubscribe(true);

      setTimeout(() => {
        setIsSubscribe(false);
      }, 4000);
    }, 2000);
  };

  console.log(email);

  return (
    <section id={styles.subscribe}>
      <div className={styles.container}>
        <div id={styles.subscribe_box}>
          <div className={styles.info_box}>
            <span className={styles.tag}>Subscribe</span>
            <h2 className={styles.title}>Subscribe to get the latest news about us</h2>
            <p className={styles.description}>Please drop your email below to get daily update about what we do</p>
          </div>

          <div className={styles.input_box}>
            <input className={styles.input} type="email" placeholder="Enter Your Email Address" onChange={(e) => setEmail(e.target.value)} />
            <input className={styles.button} type="button" value="Subscribe" onClick={handleSubscribe} />
          </div>

          <div className={styles.message_box}>
            {email !== "" && isSubscribe ? <p className={styles.message}>Thank you for subscribing!</p> : ""}
            {email === "" && isSubscribe ? <p className={styles.message_error}>Please write you email address first!</p> : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
