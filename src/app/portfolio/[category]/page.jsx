import React from "react";
import styles from "./page.module.css";
import illustration from "../../../../public/websites.jpg";
import Image from "next/image";

export default function Category({ params }) {
  const { category } = params;

  return (
    <div className={styles.main}>
      <h3>{category}</h3>

      <div className={styles.container2}>
        <div className={styles.porfolio}>
          <section className={styles.info}>
            <h1>Creative Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab
              sapiente magnam eos corporis officia repellat non consectetur qui
              reiciendis eveniet cum, fuga accusantium architecto sit libero
              praesentium adipisci harum.
            </p>
            <button>see more</button>
          </section>

          <section className={styles.imageContainer}>
            <Image className={styles.image} src={illustration} alt="" />
          </section>
        </div>

        <div className={styles.porfolio}>
          <section className={styles.info}>
            <h1>Creative Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab
              sapiente magnam eos corporis officia repellat non consectetur qui
              reiciendis eveniet cum, fuga accusantium architecto sit libero
              praesentium adipisci harum.
            </p>
            <button>see more</button>
          </section>

          <section className={styles.imageContainer}>
            <Image className={styles.image} src={illustration} alt="" />
          </section>
        </div>

        <div className={styles.porfolio}>
          <section className={styles.info}>
            <h1>Creative Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab
              sapiente magnam eos corporis officia repellat non consectetur qui
              reiciendis eveniet cum, fuga accusantium architecto sit libero
              praesentium adipisci harum.
            </p>
            <button>see more</button>
          </section>

          <section className={styles.imageContainer}>
            <Image className={styles.image} src={illustration} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}
