import { useLoaderData } from "react-router-dom";
import styles from "./styles/post-page.module.css";

function PostPage() {
  const data = useLoaderData();

  async function handleDelete(id) {
    await fetch(`http://localhost:3000/api/posts/${id}`, {
      mode: "cors",
      method: "delete",
      credentials: "include",
    });
  }

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

            <button
              onClick={() => {
                handleDelete(it._id);
              }}
              type="button"
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default PostPage;
