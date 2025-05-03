import Image from "next/image";
import Cat from "./CuteCat.jpg";
import styles from "./page.module.css";

export default function Welcome() {
  return (
     <div className={styles.page}>
        <main className={styles.main}>
            <div className={styles.imgContainer}>
            <Image
                src={Cat}
                width={400}
                height={300}
                alt={"cute cat"}
                className={styles.imageMobile}
            />
            <Image
                src={Cat}
                width={400}
                height={300}
                alt={"cute cat"}
                className={styles.imageDesktop}
            />
            </div>
            <div className={styles.details}>
            <h1 className={styles.title}>Your next delivery for Dorian and Ocie</h1>
            <h2 className={styles.subtitle}>{`Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.`}</h2>
            <p className={styles.price}>Total price: £134.00</p>
            <div className={styles.actions}>
            <a className={styles.button1}>See Details</a>
            <a className={styles.button2}>Edit Delivery</a>
            </div>
            </div>
        </main>
   </div>
   );
}