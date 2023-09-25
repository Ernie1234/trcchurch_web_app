"use client";

import Image from "next/image";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";
import Banner from "./components/banner/Banner";
import Heading from "./components/typography/Heading";
import styles from "./page.module.css";
import Card from "./components/card/Card";

export default function Home() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <Banner />

      {/* our story */}
      <section id="our story" className={styles.grid__container}>
        <div className={styles.grid__item}>
          <Heading main="our story" sub="weekly gathering" />
          <p className={styles.story}>
            You matter to God and you matter to us. You are of infinite worth.
            And we{`'`}re so glad you{`'`}re here. The Risen Christ Christian
            Centre is made up of real people, living real lives, making
            mistakes, experiencing joy, doing the best we can with what we have,
            taking our next steps toward Christ and helping others do the same.
          </p>
        </div>
        <div className={styles.composition}>
          <Image
            width={220}
            height={220}
            alt="story"
            src="/images/story1.jpg"
            className={`${styles.composition__img} ${styles.img__1}`}
            loading="lazy"
          />
          <Image
            width={220}
            height={220}
            alt="story"
            src="/images/story4.jpg"
            className={`${styles.composition__img} ${styles.img__2}`}
            loading="lazy"
          />
          <Image
            width={220}
            height={220}
            alt="story"
            src="/images/story2.jpg"
            loading="lazy"
            className={`${styles.composition__img} ${styles.img__3}`}
          />
        </div>
      </section>
      {/* FEATURES */}
      <section id="our story" className={styles.features}>
        <div className={styles.features__bg}>
          <Image
            width={220}
            height={220}
            alt="story"
            src="/images/12.png"
            loading="lazy"
            className={styles.ft__main_img}
          />
          <Image
            width={220}
            height={220}
            alt="story"
            src="/images/4.jpeg"
            loading="lazy"
            className={styles.ft__sub_img}
          />
        </div>
        <div
          className={styles.features__content}
          style={
            mode === "light"
              ? { color: "#252525" }
              : { backgroundColor: "rgba(51, 51, 51, 0.5)" }
          }
        >
          <h3 className={styles.ft__title}>prayer</h3>
          <p className={styles.ft__text}>
            {'"'}Do not be anxious about anything, but in everything by prayer
            and pleading with thanksgiving let your requests be made known to
            God.{'"'}
          </p>
          <p className={styles.ft__verse}>PHILIPPIANS 4:6</p>
        </div>
      </section>

      {/* EVENT FEATURES  */}
      <div className={styles.event}>
        <Heading sub="what's happening" main="featured events" />
        <Card />
      </div>
    </>
  );
}
