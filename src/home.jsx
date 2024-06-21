import { Link, Outlet } from "react-router-dom";
import styles from "./styles/home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.sidebar}>
        <h1 className={styles.title}>User info</h1>
      </section>

      <section className={styles.content}>
        <nav className={styles.navbar}>
          <Link className={styles.link} to="posts">
            Your posts
          </Link>
          <Link className={styles.link} to="comments">
            Your Comments
          </Link>
        </nav>
        <Outlet></Outlet>
      </section>
    </div>
  );
}

export default Home;
