import React from 'react'
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'

const Login = () => {
  const err = useActionData();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (
    <div
      className="container m-2"
      style={{ color: "white", backgroundColor: "black" }}
    >
      <h1>Login</h1>
      <Form method="POST" /* action='/register' */>
        {err && (
          <ul>
            {err.map((err) => (
              <li key={err.message} className="text-danger">
                {err.message}
              </li>
            ))}
          </ul>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            aria-describedby="passwordHelp"
          />
        </div>
        <button type="submit" className="btn btn-secondary mb-5" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Login"}
        </button>
      </Form>
    </div>
  )
}

export default Login


export async function action({ request, params }) {
  const data = await request.formData();
  const password = data.get("password");
  const email = data.get("email");
  let errors = [];
  if (!password || !email) {
    errors.push({ message: "Both fields are required " });
  } else {
    if (!email.includes("@")) {
      errors.push({ message: "Invalid Email" });
    }
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const registerDetails = { password, email };
  const response = await fetch("http://localhost:5000/api/login/", {
    method: "POST",
    headers: {
      "COntent-Type": "application/json",
    },
    body: JSON.stringify(registerDetails),
  });

  if (!response.ok) {
    errors.push({ message: "could not find the User details in DB" });
  }

  if (response.status === 401) {
    errors.push({ message: "Email id doesn't exist" });
  }
  if (response.status === 402) {
    errors.push({ message: "Invalid credentails" });
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  if(response.ok){
    const data=await response.json()
    localStorage.setItem("token",JSON.stringify(data.authtoken))
    return redirect("/");
  }
 
}
