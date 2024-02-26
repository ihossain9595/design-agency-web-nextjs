"use client";

import { usePathname } from "next/navigation";
import styles from "./Menubar.module.css";

import Link from "next/link";

const Menubar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const handleActiveLink = (path) => {
    if (pathname === path) {
      return `${styles.link} ${styles.link_active}`;
    } else {
      return styles.link;
    }
  };

  return (
    <menu id={styles.menu}>
      <Link className={handleActiveLink("/")} href="/">
        Home
      </Link>
      <Link className={handleActiveLink("/team")} href="team">
        Team
      </Link>
      <Link className={handleActiveLink("/service")} href="service">
        Service
      </Link>
      <Link className={handleActiveLink("/projects")} href="projects">
        Projects
      </Link>
      <Link className={handleActiveLink("/testimonials")} href="testimonials">
        Testimonials
      </Link>
    </menu>
  );
};

export default Menubar;
