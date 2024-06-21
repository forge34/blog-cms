import { Form, Navigate, useActionData } from "react-router-dom";
import { TextInput } from "./components/text-input";

function Login() {
  const actionData = useActionData();

  if (actionData?.ok != undefined) {
    return <Navigate to={"/user"}></Navigate>;
  }

  return (
    <Form method="POST" action="/login" className="form">
      <TextInput
        inputProps={{ required: true, minLength: 1 }}
        name="username"
        label="Username"
      ></TextInput>
      <TextInput
        inputProps={{ required: true, minLength: 6 }}
        name="password"
        label="Password"
        password={true}
      ></TextInput>
      <button type="submit" className="loginBtn">
        Login
      </button>
    </Form>
  );
}

export default Login;
