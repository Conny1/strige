import Button from "@/componets/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import hero from "../../public/hero.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.column1}>
        <section className={styles.column1Sec1}>
          <h1>Better design for your products</h1>

          <p>
            Turning your idea into reality. We bring together the teams from the
            global tech industry
          </p>

          <Button url="portfolio" text="see our works" />
        </section>

        <section className={styles.imageContainer}>
          <Image className={styles.image} src={hero} alt="hero" />
        </section>
      </div>
    </main>
  );
}
