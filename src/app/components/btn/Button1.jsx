"use client";

import styles from "./btnStyle.module.css";

const Button1 = ({ title }) => {
  return <button className={styles.btn1}>{title}</button>;
};

export default Button1;
