"use client";

import Link from "next/link";
import styles from "./Intro.module.css";

import { usePathname } from "next/navigation";

const Intro = () => {
  const path = usePathname();

  const beautifyText = (text) => {
    const cleanText = text.replace("/", "");

    switch (cleanText) {
      case "service":
        return "Our Services";
        break;
      case "team":
        return "Team";
        break;
      case "projects":
        return "All Project";
        break;
      case "testimonials":
        return "Testimonial List";
        break;

      default:
        return cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
        break;
    }
  };

  return (
    <section id={styles.intro}>
      <div className={styles.container}>
        <h1 className={styles.title}>{beautifyText(path)}</h1>

        <div className={styles.breadcrumbs_box}>
          <Link className={styles.breadcrumbs} href="/">
            Home
          </Link>
          <span className={styles.arrow}>&gt;</span>
          <p className={`${styles.breadcrumbs} ${styles.breadcrumbs_active}`}>{beautifyText(path)}</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
