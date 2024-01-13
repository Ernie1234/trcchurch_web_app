import Header from "../components/header/Header";
import MasonryGrid from "../components/masonry/Masonry";
import Heading from "../components/typography/Heading";
import styles from "./program.module.css";

import { program } from "../libs/data";
import Live from "../components/live/Live";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/program", {
      cache: "no-store",
    });
    // if (!res.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
}
const Program = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Header
        sub="hello"
        main1="our"
        main2="live Programs"
        main3="and features"
        url="/images/growth.webp"
      />
      <div className={styles.headin}>
        <Heading main="Live events" sub="Our live programs and shows" />
      </div>
      <Live />
      <div className={styles.headin}>
        <Heading main="Our Programs" sub="features and events" />
      </div>
      <MasonryGrid data={data} morePage />
    </>
  );
};

export default Program;
