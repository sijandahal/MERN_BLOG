import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from "./menuPosts.module.css"

const menuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {
                    withImage && (
                        <div className={styles.imageContainer}>
                        <Image src = "/p1.jpeg" alt="" fill className={styles.image}></Image>
                       </div> 
                    )
                }
          
               <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.travel}`}>
                    Travel
                </span>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, adipisci.</h3>
                <div className={styles.details}>
                  <span className={styles.username}>
                    John Doe
                  </span>
                  <span className={styles.date}> - 10.3.2023 </span>

                </div>
                </div> 

            </Link>

            <Link href="/" className={styles.item}>
                { withImage && (
                    <div className={styles.imageContainer}>
                    <Image src = "/p1.jpeg" alt="" fill className={styles.image}></Image>
                   </div> )
                }
               
               <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.fashion}`}>
                    Fashion
                </span>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, adipisci.</h3>
                <div className={styles.details}>
                  <span className={styles.username}>
                    John Doe
                  </span>
                  <span className={styles.date}> - 10.3.2023 </span>

                </div>
                </div> 

            </Link>

            <Link href="/" className={styles.item}>
                {
                    withImage && (
                        <div className={styles.imageContainer}>
                        <Image src = "/p1.jpeg" alt="" fill className={styles.image}></Image>
                       </div> 
                    )
                }
              
               <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.culture}`}>
                    Culture
                </span>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, adipisci.</h3>
                <div className={styles.details}>
                  <span className={styles.username}>
                    John Doe
                  </span>
                  <span className={styles.date}> - 10.3.2023 </span>

                </div>
                </div> 

            </Link>

            <Link href="/" className={styles.item}>
                 {
                    withImage && (
                        <div className={styles.imageContainer}>
                 <Image src = "/p1.jpeg" alt="" fill className={styles.image}></Image>
                </div> 
                    )
                 }
               
               <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.culture}`}>
                    Culture
                </span>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, adipisci.</h3>
                <div className={styles.details}>
                  <span className={styles.username}>
                    John Doe
                  </span>
                  <span className={styles.date}> - 10.3.2023 </span>

                </div>
                </div> 

            </Link>
          </div>
  )
}

export default menuPosts