"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";

import styles from "./masonry.module.css";
import Link from "next/link";

const MasonryGrid = ({ data, morePage }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      {morePage ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={`${styles.my__masonry__grid_column} ${styles.program_gap}`}
        >
          {data?.map((item, index) => (
            <Link key={index} href="/program/id" className={styles.link}>
              <div className={styles.link__bg}>
                <div className={styles.grid_item}>
                  <Image
                    quality={100}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    alt="pastor"
                    src={item?.url}
                    className={styles.link__img}
                  />
                </div>
                {item.title && (
                  <h3 className={styles.link__title}>{item?.title}</h3>
                )}
                {item.desc && (
                  <h4 className={styles.link__desc}>{item?.desc}</h4>
                )}
              </div>
            </Link>
          ))}
        </Masonry>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={styles.my__masonry__grid_column}
        >
          {data?.map((item, index) => (
            <>
              <div key={index} className={styles.grid_item}>
                <Image
                  quality={100}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  alt="pastor"
                  src={item?.url}
                  className={styles.masonry__img}
                />
              </div>
              {item.title && <h3>{item?.title}</h3>}
              {item.desc && <h4>{item?.desc}</h4>}
            </>
          ))}
        </Masonry>
      )}
    </>
  );
};

export default MasonryGrid;
