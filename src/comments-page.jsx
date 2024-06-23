import { useLoaderData } from "react-router-dom";
import styles from "./styles/post-page.module.css";

function CommentsPage() {
  const data = useLoaderData();
  console.log(data);
  async function handleDelete(id) {
    let res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      mode: "cors",
      method: "delete",
      credentials: "include",
    });
    res = await res.json();

    console.log(res);
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
              <h3 className={styles.title}>{it.body}</h3>
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
export default CommentsPage;
