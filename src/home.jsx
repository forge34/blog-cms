import { Outlet } from "react-router-dom";
import styles from "./styles/home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.sidebar}>
        <h1 className={styles.title}>User info</h1>
      </section>
      <Outlet></Outlet>
    </div>
  );
}

export default Home;
