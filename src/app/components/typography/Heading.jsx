"use client";

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import styles from "./heading.module.css";

const Heading = ({ main, sub }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <>
      {sub && <p className={styles.heading__sub}>{sub}</p>}
      <h2
        className={styles.heading__main}
        style={mode === "light" ? { color: "#252525" } : { color: "#efeff0" }}
      >
        {main}
      </h2>
      <span className={styles.heading__line}></span>
    </>
  );
};

export default Heading;
