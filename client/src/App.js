import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home";

import Dogs from "./screens/Dogs/Dogs";
import DogCreate from "./screens/DogCreate/DogCreate";
import DogDetail from "./screens/DogDetail/DogDetail";
import DogEdit from "./screens/DogEdit/DogEdit";

import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/dogs">
          <Dogs user={user} />
        </Route>
        <Route path="/add-dog">
          {user ? <DogCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/dogs/:id/edit">
          {user ? <DogEdit user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/dogs/:id">
          <DogDetail user={user} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
