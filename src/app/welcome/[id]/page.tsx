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
                width={500}
                height={400}
                alt={"cute cat"}
                className={styles.image}
            />
            </div>
            <div className={styles.details}>
            <h1>Your next delivery for Dorian and Ocie</h1>
            <h2>{`Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.`}</h2>
            <p>Total price: £134.00</p>
            <div className={styles.actions}>
            <a className={styles.button1}>See Details</a>
            <a className={styles.button2}>Edit Delivery</a>
            </div>
            </div>
        </main>
   </div>
   );
}