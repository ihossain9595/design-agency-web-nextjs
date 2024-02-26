import styles from "./Header.module.css";

import Image from "next/image";
import Link from "next/link";

import Menubar from "../Menubar/Menubar";

const Header = () => {
  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <Image className={styles.logo} src={"logos/logo_design_agency.svg"} width={509} height={72} alt="Design Agency logo" />
        </div>
        <div className={styles.menu_box}>
          <Menubar />
          <div className={styles.button_box}>
            <Link className={styles.button_outline} href="#">
              Login
            </Link>
            <Link className={styles.button_fill} href="#">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
