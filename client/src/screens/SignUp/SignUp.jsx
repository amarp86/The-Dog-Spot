import React, { useState } from "react";
import "./SignUp.css";
import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

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
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
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
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { email, name, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="form-container">
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
            placeholder="Enter email"
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
    </Layout>
  );
};

export default SignUp;