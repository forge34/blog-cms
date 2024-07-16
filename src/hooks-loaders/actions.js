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
  return fetch(`${import.meta.env.VITE_API_URL}/api/login`, options);
}

export { LoginAction };
