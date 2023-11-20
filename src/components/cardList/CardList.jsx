import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
import Link from "next/link";

const getData = async (page) => {
  const res = await fetch(
    `http://localhost:3000/api/posts`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  const response = await res.json();
  return response
  // return res.json();
};

const CardList = async ({ page, cat }) => {
  const posts = await getData(page, cat);

  const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  
    console.log("hello", posts)
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        
        {posts?.map((item) => (
      
          
          
        <Card item={item} key={item._id} />
        ))}
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default CardList;
