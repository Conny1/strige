import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
export default function Button({ text, url }) {
  return (
    <Link className={styles.linkBtn} href={`/${url}`}>
      {text}
    </Link>
  );
}
