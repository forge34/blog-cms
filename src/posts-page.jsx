import { useLoaderData } from "react-router-dom";
import styles from "./styles/post-page.module.css";

function PostPage() {
  const data = useLoaderData();

  return (
    <div className={styles.container}>
      {data?.map((it) => {
        return (
          <div key={it._id} className={styles.postContainer}>
            <div>
              <div className={styles.postInfo}>
                <address rel="author">{it.author.username}</address>
                <time>{it.date}</time>
              </div>
              <h3 className={styles.title}>{it.title}</h3>
            </div>
            <button type="button" className={styles.editBtn}>
              Edit
            </button>

            <button type="button" className={styles.deleteBtn}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default PostPage;
