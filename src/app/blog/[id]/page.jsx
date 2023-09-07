import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import websites from "../../../../public/websites.jpg";

const getPost = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return data.json();
};

// console.log(blogPost);
export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

export default async function Post({ params }) {
  const blogPost = await getPost(params.id);

  return (
    <div className={styles.main}>
      <div className={styles.post}>
        <section className={styles.imageContainer}>
          <Image className={styles.image} src={websites} alt="" />
        </section>

        <section className={styles.textInfo}>
          <h1>{blogPost.title}</h1>

          <p>{blogPost.body}</p>

          <div className={styles.writer}>
            <section className={styles.writerImageContainer}>
              <Image
                className={styles.writerImage}
                src={websites}
                alt=""
                width={30}
                height={30}
              />
            </section>
            <p>Mbuya joel</p>
          </div>
        </section>
      </div>

      <div className={styles.blogDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        quae quis minus ullam, in voluptates dicta voluptatibus voluptate modi
        maxime error illo, quibusdam porro commodi. Debitis adipisci, quas
        voluptates exercitationem, nobis ducimus facilis totam sapiente quaerat
        asperiores corrupti ullam? Modi esse porro ex libero nobis aspernatur
        odit quis incidunt officia ab architecto commodi sed aliquid fuga animi
        asperiores, maiores delectus quae totam quaerat! Unde, recusandae
        aspernatur iste doloribus cum eligendi maxime asperiores dolores vero
        nam placeat expedita, fuga ipsum quod harum facilis laudantium excepturi
        ea reprehenderit provident est sequi! Dignissimos culpa itaque quidem
        modi esse officiis dolorum corporis et, vitae numquam amet asperiores,
        facilis suscipit laudantium reiciendis. Dolore explicabo deleniti,
        maiores, magnam assumenda nesciunt quidem nisi voluptas ut pariatur
        nulla voluptatem obcaecati vitae sed adipisci fugiat distinctio
        reiciendis cumque iure amet ipsam deserunt ea. Deleniti dolor sunt
        repellendus incidunt, facere ratione nobis aliquid, enim ipsa ex
        quisquam, molestiae nulla illum eos explicabo. Eveniet maxime ducimus
        maiores quisquam. Expedita quasi, blanditiis iure, ipsa iusto fugit
        vitae sed corrupti eaque esse, nulla voluptate repellat vel quo minima
        porro a asperiores voluptatum. Molestias, optio. Laudantium itaque,
        temporibus accusamus mollitia alias a optio molestiae architecto
        ducimus, dicta at in asperiores corrupti odit eius quaerat quo cumque!
        Nostrum beatae unde fugit atque reprehenderit velit, ea facere! Sed
        nobis accusamus hic laudantium harum voluptatibus amet molestiae labore,
        nemo sequi nostrum saepe aliquam provident voluptatem! Nam ducimus
        reprehenderit placeat porro! Eos et dolorem nobis porro beatae! Tempora
        quisquam quasi vitae illum accusantium sint debitis, culpa quo vel
        doloribus laudantium numquam molestiae est cum excepturi inventore.
        Tenetur, quas omnis labore recusandae fugit explicabo ipsa nesciunt
        nostrum deserunt nemo debitis inventore aliquid aliquam harum,
        architecto vitae pariatur error praesentium magnam animi atque, et
        facilis sequi! Repellat excepturi reprehenderit praesentium sit,
        pariatur aspernatur voluptatem delectus non cum ratione recusandae
        magni.
      </div>
    </div>
  );
}
