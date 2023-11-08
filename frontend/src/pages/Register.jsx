import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

const Register = () => {
  const err = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div
      className="container"
      style={{ color: "white", backgroundColor: "black" }}
    >
      <h1>SignUp</h1>
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
          <label htmlFor="name" className="htmlForm-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            autoComplete="false"
            required
          />
        </div>
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
          <div id="passwordHelp" className="form-text text-info">
            Minimum eight characters, at least one uppercase letter, one
            lowercase letter, one number and one special character
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobileno" className="form-label">
            Mobile No{" "}
          </label>
          <input
            type="tel"
            pattern="[6789][0-9]{9}"
            className="form-control "
            id="mobileno"
            name="mobileno"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            required
            aria-describedby="addressHelp"
          />
          <div id="addressHelp" className="form-text text-info">
           usecurrent location
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-secondary mb-5"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </Form>
    </div>
  );
};

export default Register;

const regularExpression =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;

export async function action({ request, params }) {
  const data = await request.formData();
  const name = data.get("name");
  const password = data.get("password");
  const email = data.get("email");
  const mobileno = data.get("mobileno");
  const location = data.get("location");
  let errors = [];
  if (!name || !password || !email || !mobileno || !location) {
    errors.push({ message: "All fields are required " });
  } else {
    if (!regularExpression.test(password)) {
      errors.push({ message: "Does not meet the password characters" });
    } else if (!email.includes("@")) {
      errors.push({ message: "Invalid Email" });
    } else if (mobileno.length !== 10) {
      errors.push({ message: "Invalid mobile no" });
    }
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const registerDetails = { name, password, email, mobileno, location };
  console.log(registerDetails);
  const response = await fetch("http://localhost:5000/api/createuser/", {
    method: "POST",
    headers: {
      "COntent-Type": "application/json",
    },
    body: JSON.stringify(registerDetails),
  });
  if (!response.ok) {
    errors.push({ message: "could not send the User details to DB" });
  }
  if (response.status === 401) {
    errors.push({ message: "Email already exists, try another email" });
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return redirect("/login");
}
