import React from "react";
import styles from "./page.module.css";
import illustration from "../../../../public/websites.jpg";
import Image from "next/image";
import { items } from "./data";

export default function Category({ params }) {
  const { category } = params;

  return (
    <div className={styles.main}>
      <h3>{category}</h3>

      <div className={styles.container2}>
        {items[category]?.map((item) => {
          return (
            <div key={item?.id} className={styles.porfolio}>
              <section className={styles.info}>
                <h1>{item?.title}</h1>
                <p>{item.desc}</p>
                <button>see more</button>
              </section>

              <section className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={item?.image}
                  fill={true}
                  alt=""
                />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
