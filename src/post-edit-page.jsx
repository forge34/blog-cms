import { useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "./components/text-input";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import propTypes from "prop-types";
import { useState } from "react";
import styles from "./styles/post-edit.module.css";

function PostEditPage() {
  const { state } = useLocation();
  const [mdValue, setMdValue] = useState(state.body);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    const formEntry = Object.fromEntries(new FormData(e.target).entries());

    const options = {
      method: "put",
      mode: "cors",
      body: JSON.stringify(formEntry),
      credentials: "include",
      headers: {
        "Content-Type": "Application/json",
      },
    };

    await fetch(
      "http://localhost:3000/api/posts/" + state.id + "/edit",
      options,
    );

    navigate("/user/posts");
  }
  return (
    <div data-color-mode="light" className={styles.container}>
      <form method="put" onSubmit={handleSubmit}>
        <TextInput
          name="newTitle"
          label="New Post title"
          inputProps={{ value: state.title }}
        ></TextInput>

        <MDEditor
          style={{ margin: "0.7em 0" }}
          height="90%"
          textareaProps={{
            form: styles.postForm,
            id: "textArea",
            name: "newBody",
            maxLength: 10000,
            placeholder: "Enter post body",
          }}
          value={mdValue}
          onChange={setMdValue}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
        <button>Confirm edit</button>
      </form>
    </div>
  );
}

PostEditPage.propTypes = {
  old: propTypes.object,
};

export default PostEditPage;
