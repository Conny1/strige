import React from "react";
import styles from "./nav.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Nav() {
  return (
    <header className={styles.head}>
      <nav className={styles.nav}>
        <section>
          <h1>Strige</h1>
        </section>

        <section className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contacts">Contact us</Link>
          <Link href="/dashboard">Dashboard</Link>
        </section>
      </nav>
    </header>
  );
}
