import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useState } from "react";

import React from "react";

const Comments = () => {
  const status = "authenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "unauthenticated" ? (
        <div className={styles.write}>
           <textarea placeholder="Write a comment ...." name="" id="" cols="30" rows="10" className={styles.input}></textarea>
           <button className={styles.button}>Add a Comment</button>
           </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
         <div className={styles.comment}>
          <div className={styles.user}>
            <Image className= {styles.image} width={50} height={50} src = "/p1.jpeg"/>
            <div className={styles.userInfo}>
              <span className={styles.username}>Sijan Dahal</span>
              <span className={styles.date}> 11-19-2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt quis doloremque repudiandae eos quae totam rerum quaerat iusto odit?
          </p>
         </div>
      </div>
    </div>
  );
};

export default Comments;
