"use client"
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const mockId = "123-456";

  useEffect(() => {
    router.push(`/welcome/${mockId}`)
  }, [router]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          Hello
        </div>
      </main>
    </div>
  );
}
