import Image from "next/image";
import styles from "./contact.module.css";
import Header from "../components/header/Header";
import Heading from "../components/typography/Heading";

export const metadata = {
  title: "TRCC Contact",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <>
      <Header
        sub="contact us"
        main1="Let's keep"
        main2="in touch"
        url="/images/contact1.jpg"
      />
      <div className={styles.headin}>
        <Heading sub="tell us about you" main="your details" />
      </div>

      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          {/* <Button url="#" text="Send" /> */}
        </form>
      </div>
    </>
  );
};

export default Contact;
