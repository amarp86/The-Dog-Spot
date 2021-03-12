import React, { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    // name: "",
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          // name: "",
          password: "",
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
    } else if (!password) {
      return <p className="password-error">Please Enter Password</p>;
    } else if (email.includes("@") !== true) {
      return <p className="email-error">Invalid Email - must include @</p>;
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { password, email } = form;

  const handleSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <div className="sign-in-form-container">
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        {/* <label>Name</label>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        /> */}
        <label>E-Mail</label>
        <input
          className="sign-in-input"
          required
          name="email"
          value={email}
          type="text"
          placeholder="E-Mail Address"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="sign-in-input"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
      <div className="instructions">
        Don't Have an Account? Sign Up Below:
        <button className="sign-up-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;
