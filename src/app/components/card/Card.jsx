import Image from "next/image";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card}>
        <Image
          alt="Mountains"
          src="/images/Atmosphere.jpeg"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className={styles.card__img}
        />
        <h4 className={styles.card__title}>mid-week service</h4>
        <p className={styles.card__details}>saturday - 4pm</p>
      </div>
      <div className={styles.card}>
        <Image
          alt="Mountains"
          src="/images/War.jpeg"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className={styles.card__img}
        />
        <h4 className={styles.card__title}>Sunday service</h4>
        <p className={styles.card__details}>saturday - 4pm</p>
      </div>
      <div className={styles.card}>
        <Image
          alt="Mountains"
          src="/images/Atmosphere.jpeg"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className={styles.card__img}
        />
        <h4 className={styles.card__title}>Youth service</h4>
        <p className={styles.card__details}>saturday - 4pm</p>
      </div>
    </div>
  );
};

export default Card;
