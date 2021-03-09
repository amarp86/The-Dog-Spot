import React, { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
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
          name: "",
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
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { name, password, email } = form;

  return (
    <div className="form-container">
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        <label>Name</label>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <label>E-Mail</label>
        <input
          required
          name="email"
          value={email}
          type="text"
          placeholder="E-Mail Address"
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
        {renderError()}
      </form>
    </div>
  );
};

export default SignIn;
