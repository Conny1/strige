import React from "react";
import styles from "./page.module.css";
import websites from "../../../public/websites.jpg";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const getPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    return data.json();
  };

  const blogPosts = await getPosts();
  // console.log(blogPosts);
  return (
    <div className={styles.main}>
      {blogPosts?.map((post) => {
        return (
          <Link
            key={post.id}
            href={`/blog/${post?.id}`}
            className={styles.post}
          >
            <section className={styles.imageContainer}>
              <Image className={styles.image} src={websites} alt="" />
            </section>

            <section className={styles.textInfo}>
              <h1>{post?.title}</h1>

              <p>{post?.body}</p>
            </section>
          </Link>
        );
      })}
    </div>
  );
}
