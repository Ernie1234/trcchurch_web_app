"use client";

import Image from "next/image";

import styles from "./header.module.css";

const Header = ({ main1, main2, main3 = "", sub, url }) => {
  return (
    <header className={styles.header}>
      <div className={styles.img__wrapper}>
        <Image
          alt="Header"
          src={url}
          quality={100}
          fill
          sizes="100vw"
          className={styles.header__img}
        />
      </div>
      <div className={styles.content__bg}>
        <div className={styles.content}>
          <h2 className={styles.head_sub}>{sub}</h2>
          <h2 className={styles.head_main}>
            {main1}
            <span className={styles.header__diff_text}> {main2} </span>
            {main3}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
