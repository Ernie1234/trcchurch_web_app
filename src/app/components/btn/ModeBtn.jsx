"use client";

import { MdLightMode, MdModeNight } from "react-icons/md";

import styles from "./modeBtnStyle.module.css";
import DarkModeToggle from "../darkmode/DarkMode";

const ModeBtn = () => {
  return (
    // <div className={styles.mode__toggle}>
    <DarkModeToggle />
    // </div>
  );
};

export default ModeBtn;
