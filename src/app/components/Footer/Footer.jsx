import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const icons = [
  { id: 1, src: "icons/icon_facebook.svg", alt: "Facebook icon", width: 10, height: 19, link: "https://www.facebook.com" },
  { id: 2, src: "icons/icon_twitter.svg", alt: "Twitter icon", width: 18, height: 15, link: "https://www.twitter.com" },
  { id: 3, src: "icons/icon_linkedin.svg", alt: "Linkedin icon", width: 16, height: 16, link: "https://www.linkedin.com" },
  { id: 4, src: "icons/icon_instagram.svg", alt: "Instagram icon", width: 16, height: 15, link: "https://www.instagram.com" },
];

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.container_main}>
        <div className={styles.first_box}>
          <Link href="/">
            <Image className={styles.logo} src={"logos/logo_web_logo.svg"} width={507} height={71} alt="Web logo" />
          </Link>
          <p className={styles.description}>Some footer text about the Agency. Just a little description to help people understand you better</p>
          <div className={styles.icon_boxes}>
            {icons.map((icon) => {
              return (
                <Link key={icon.id} className={styles.icon_box} href={icon.link} target="_blank">
                  <Image className={styles.icon} src={icon.src} width={icon.width} height={icon.height} alt={icon.alt} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.second_box}>
          <p className={styles.title}>Quick Links</p>
          <div className={styles.link_box}>
            <Link className={styles.link} href="#">
              Services
            </Link>
            <Link className={styles.link} href="#">
              Portfolio
            </Link>
            <Link className={styles.link} href="#">
              About Us
            </Link>
            <Link className={styles.link} href="#">
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.third_box}>
          <p className={styles.title}>Address</p>
          <p className={styles.description}>
            Design Agency Head Office.
            <br /> Airport Road
            <br /> United Arab Emirate
          </p>
        </div>
      </div>
      <div className={styles.container_copy}>
        <p className={styles.copy}>Copyright Design Agency {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
