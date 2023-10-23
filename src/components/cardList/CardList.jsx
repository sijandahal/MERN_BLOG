import React from 'react'
import Image from 'next/image';
import Card from '../card/Card';
import styles from "./cardList.module.css";


const CardList = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Recent Posts</h1>
    <div className={styles.posts}>
    <div className={styles.post}>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
      </div>
    </div>
    
  </div>
  )
}

export default CardList