import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
    
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
   
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            11.02.2023 - </span>
          <span className={styles.category}>
            CULTURE
          </span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ducimus incidunt autem excepturi aspernatur iste velit molestias ipsam saepe rem consectetur, dolores aliquid mollitia culpa! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, omnis ex beatae magni, voluptas fugit repellendus, similique itaque ab quod sed enim eligendi nihil unde.</p>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc}/>
        <Link  className={styles.link} href = {""}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;