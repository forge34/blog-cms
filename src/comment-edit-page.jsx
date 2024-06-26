import { useLocation } from "react-router-dom";
import { TextInput } from "./components/text-input";
import { useNavigate } from "react-router-dom";

function CommentEditPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formEntry = Object.fromEntries(new FormData(e.target).entries());
    console.log(formEntry);
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
      "https://blog-backend-production-8991.up.railway.app/api/comments/" +
        state.id +
        "/edit",
      options
    );
    navigate("/user/comments");
  }

  return (
    <div>
      <form method="put" onSubmit={handleSubmit}>
        <TextInput
          name="editedComment"
          inputProps={{ value: state.body }}
          label="New comment body"
        ></TextInput>
        <button>Confirm edit</button>
      </form>
    </div>
  );
}

export default CommentEditPage;
