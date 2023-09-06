import React from "react";
import styles from "./page.module.css";
import websites from "../../../public/websites.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className={styles.main}>
      <Link href="/blog/1" className={styles.post}>
        <section className={styles.imageContainer}>
          <Image className={styles.image} src={websites} alt="" />
        </section>

        <section className={styles.textInfo}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            quis? Nobis quasi, porro, eum adipisci dolor totam ea illo{" "}
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            asperiores rem. Minima nihil, illo culpa similique ex voluptas sunt
            reprehenderit veritatis ut quod esse maxime? Incidunt blanditiis
            pariatur reprehenderit omnis?
          </p>
        </section>
      </Link>
    </div>
  );
}
