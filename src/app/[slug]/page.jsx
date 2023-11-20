"use client";

import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Comment from "@/components/Comments/Comments";
import Image from "next/image";

import React from "react";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      Single page
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hello, Welcome to my Blog Post</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sijan Dahal</span>
              <span className={styles.date}>11-19-2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Think about how you can attract more people to your business.
              Consumers use search engines to find the information they need. In
              fact, Google alone processes 40,000 search queries per second. You
              can also generate organic traffic from Bing, Yahoo!, and other
              search engines. Blogs help you create content that appeals to
              search engines as well as consumers. First, though, you need to
              know how to write an introductory blog post. This post lets your
              audience know who you are, why you’re blogging, and what topics
              you’ll cover in the coming weeks, months, and years. Nailing the
              introductory blog post can generate new fans and followers from
              the moment you publish that first piece of content. As long as you
              follow it up with engaging content, those followers will stick
              around to soak up the information you share.

             
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
