import styles from "./IntroSection.module.css";

const IntroSection = ({ tag, children }) => {
  return (
    <div id={styles.intro}>
      <h2 className={styles.title}>{tag}</h2>
      <p className={styles.description}>{children}</p>
    </div>
  );
};

export default IntroSection;
