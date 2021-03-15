import React, { useState } from "react";
import "./SignUp.css";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then((user) => {
        if (user === "User Already Exists") {
          alert("User Already Exists, Please try Another Email");
          history.push("/sign-up");
        } else {
          setUser(user);
          history.push("/");
        }
      })

      .catch((error) => {
        console.error(error);
        setForm({
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else if (password !== passwordConfirmation || !password) {
      return <p className="password-error">Password's Do Not Match</p>;
    } else if (email.includes("@") !== true) {
      return <p className="email-error">Invalid Email - must include @</p>;
    } else {
      return (
        <button className="submit-button" type="submit">
          Sign Up
        </button>
      );
    }
  };

  const { email, name, password, passwordConfirmation } = form;

  return (
    <div className="sign-up-form-container">
      <h3>Sign Up</h3>
      <form onSubmit={onSignUp}>
        <label>Name</label>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
};

export default SignUp;
