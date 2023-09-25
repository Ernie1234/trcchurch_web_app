"use client";

import Image from "next/image";

import styles from "./wrapper.module.css";

const Wrapper = ({ title, text, url }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img__wrapper}>
        <Image
          alt="wrapper"
          src={url}
          quality={100}
          fill
          sizes="100vw"
          className={styles.wrapper__img}
        />
      </div>
      <div className={styles.content__bg}>
        <div className={styles.content}>
          <h2 className={styles.wrapper_main}>{title}</h2>
          <span className={styles.line}></span>
          <p className={styles.wrapper_sub}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
