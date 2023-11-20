import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key}) => {
  return (
    <div className={styles.container} key={key}>
    
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
        <Link href={"/single"}>
          <h1>Hello, Welcome to my Blog Post </h1>
        </Link>
        <p>Think about how you can attract more people to your business. Consumers use search engines to find the information they need. In fact, Google alone processes 40,000 search queries per second. You can also generate organic traffic from Bing, Yahoo!, and other search engines. Blogs help you create content that appeals to search engines as well as consumers.</p>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc}/>
        <Link  className={styles.link} href = {"/single"}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;