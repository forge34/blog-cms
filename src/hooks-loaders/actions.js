async function LoginAction({ request }) {
  let formData = await request.formData();

  const body = Object.fromEntries(formData);

  const options = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
    },
  };
  return fetch(
    "https://blog-backend-production-8991.up.railway.app/api/login",
    options
  );
}

export { LoginAction };
