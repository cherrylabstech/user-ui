import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import "./LoginPage.css";
function LoginPage(props) {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(state => state.AuthReducer.loading);
  const error = useSelector(state => state.AuthReducer.error);
  const authValidate = event => {
    event.preventDefault();
    if (username && password) {
      dispatch(userActions.auth({ username: username, password: password }));
    }
  };
  const usernameChange = event => {
    setUser(event.target.value);
  };
  const passwordChange = event => {
    setPass(event.target.value);
  };
  const goBack = e => {
    e.preventDefault();
    props.history.goBack();
  };

  return (
    <div className="login-page main">
      <p className="sign" align="center">
        Sign in
      </p>
      {error !== null && (
        <p>You have remaining loginAttemptsLeft is {error.loginAttemptsLeft}</p>
      )}

      <form
        style={loading ? { opacity: 0.5 } : { opacity: 1 }}
        onSubmit={authValidate}
        className="form1"
      >
        <input
          className="un"
          type="text"
          align="center"
          onChange={usernameChange}
          value={username}
          placeholder="Username"
          required
        />

        <input
          className="pass"
          value={password}
          onChange={passwordChange}
          type="password"
          align="center"
          placeholder="Password"
          required
        />

        <button
          disabled={loading}
          type="submit"
          className="submit"
          align="center"
        >
          {loading ? " Loading.." : "Sign in"}
        </button>
        <button
          onClick={goBack}
          type="submit"
          className="submit back-button"
          align="center"
        >
          back
        </button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
