import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Welcome our Blog</b> Stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Hello, Welcome to my Blog Post </h1>
          <p className={styles.postDesc}>
          Think about how you can attract more people to your business. Consumers use search engines to find the information they need. In fact, Google alone processes 40,000 search queries per second. You can also generate organic traffic from Bing, Yahoo!, and other search engines. Blogs help you create content that appeals to search engines as well as consumers. First, though, you need to know how to write an introductory blog post. 
          </p>
            <Link href = "/single">

          <button className={styles.button} >Read More</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;