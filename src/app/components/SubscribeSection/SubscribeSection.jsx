import styles from "./SubscribeSection.module.css";

const SubscribeSection = () => {
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
            <input className={styles.input} type="email" placeholder="Enter Your Email Address" />
            <input className={styles.button} type="button" value="Subscribe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
