"use client";

import Image from "next/image";
import { useContext } from "react";

import Header from "../components/header/Header";
import Wrapper from "../components/wrapper/Wrapper";
import styles from "./about.module.css";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div>
      <Header
        sub="Learn more about"
        main1="the"
        main2="risen christ"
        main3="christain centre"
        url="/images/Marriage.webp"
      />
      <Wrapper
        url="/images/Backgd.jpg"
        title="who we are"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />
      <Wrapper
        url="/images/vision.jpg"
        title="our vision"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />
      <Wrapper
        url="/images/mission.jpg"
        title="our mission"
        text="See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Elevation guide our decisions as a church."
      />

      {/* OUR PASTOR SECTION */}
      <section id="our story" className={styles.pastor}>
        <div className={styles.pastor__bg}>
          <Image
            quality={100}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            alt="pastor"
            src="/images/pastor.jpg"
            className={styles.pastor_img}
          />
        </div>
        <div className={styles.pastor__content}>
          <div className={styles.pst__bg_sm}>
            <Image
              quality={100}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              alt="pastor"
              src="/images/pastor.jpg"
              className={styles.pst__img_sm}
            />
          </div>
          <h3 className={styles.pst__title}>Our pastor</h3>
          <p
            className={styles.pst__text}
            style={
              mode === "light" ? { color: "#252525" } : { color: "#252525" }
            }
          >
            {'"'}Do not be anxious about anything, but in everything by prayer
            and pleading with thanksgiving let your requests be made known to
            God.{'"'}
          </p>
          <p className={styles.pst__verse}>PHILIPPIANS 4:6</p>
        </div>
      </section>
    </div>
  );
};

export default About;
