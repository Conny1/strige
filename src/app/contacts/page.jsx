import React from "react";
import styles from "./page.module.css";
import contact from "../../../public/contact.png";
import Image from "next/image";

export default function Contacts() {
  return (
    <div className={styles.main}>
      <h1>
        L<span>et&#39; s keep in touch</span>{" "}
      </h1>

      <div className={styles.contactColunmn}>
        <section>
          <Image className={styles.image} src={contact} alt="" />
        </section>

        <section className={styles.form}>
          <input type="text" placeholder="name" />

          <input type="email" name="email" placeholder="email" />

          <textarea
            name="message"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </section>
      </div>
    </div>
  );
}
