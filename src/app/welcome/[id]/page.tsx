import Image from "next/image";
import Cat from "./CuteCat.jpg";
import styles from "./page.module.css";

export default function Welcome() {
  return (
     <div className={styles.page}>
        <main className={styles.main}>
            <Image
                src={Cat}
                width={300}
                height={200}
                alt={"cute cat"}
            />
            <h1>Your next delivery</h1>
        </main>
   </div>
   );
}