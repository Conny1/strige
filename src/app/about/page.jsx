import React from "react";
import styles from "./page.module.css";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Button from "@/componets/Button/Button";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={about} fill={true} alt="" />
      </div>

      <div className={styles.aboutInfo}>
        <section>
          <h1>Who am I</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            provident, ipsa esse cumque facilis molestias perferendis corrupti
            dignissimos consequatur magni fugit ex aspernatur eligendi culpa
            itaque quos adipisci. Dicta vel pariatur beatae fugiat accusantium
            amet voluptate deleniti! Hic id rerum, modi quae voluptatibus at
            voluptates! Dolore sit libero similique eveniet.
          </p>
        </section>

        <section>
          <h1>What i do</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            eaque, commodi illo numquam cum inventore, amet reprehenderit magni
            soluta, ipsam error dolorum vel officiis similique harum nulla
            accusamus placeat quidem.
          </p>

          <ul className={styles.list}>
            <li>Dynamic websites </li>
            <li>Consoltations </li>
          </ul>

          <Button url="contacts" text="Contact" />
        </section>
      </div>
    </div>
  );
}
