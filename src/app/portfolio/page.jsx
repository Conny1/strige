import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import websites from "../../../public/websites.jpg";
import illustration from "../../../public/illustration.png";
import apps from "../../../public/apps.jpg";
import Link from "next/link";
export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h3>choose a gallery</h3>
      <div className={styles.imageGroup}>
        <Link href="portfolio/illustrations">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={illustration} alt="" />
            <p className={styles.imageText}>illustrations</p>
          </div>
        </Link>

        <Link href="portfolio/websites">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={websites} alt="" />
            <p className={styles.imageText}>websites</p>
          </div>
        </Link>

        <Link href="portfolio/applications">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={apps} alt="" />
            <p className={styles.imageText}>Applications</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
