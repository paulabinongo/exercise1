import React, { useState, useCallback } from "react";

import Field from "../Field";

import gql from "graphql-tag";
import { useMutation } from "urql";
import { setToken } from "../../utils/token";

import "./styles.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $username: String!
    ) {
      signup(email: $email, password: $password, username: $username) {
        token
      }
    }
  `;

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  const [state, executeMutation] = useMutation(
    isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION
  );

  //   // const mutate = useCallback(
  //   //   () => {
  //   //     callback
  //   //   },
  //   //   [input],
  //   // )

  const mutate = useCallback(() => {
    executeMutation({ email, password }).then(({ data }) => {
      const token = data && data[isLogin ? "login" : "signup"].token;
      if (token) {
        setToken(token);
        props.history.push("/");
      }
    });
  }, [executeMutation, props.history, isLogin, email, password]);

  return (
    <form>
      <div className="form">
        <h4>{isLogin ? "Login" : "Sign Up"}</h4>
        {!isLogin && (
          <Field
            placeholder="Username"
            type="text"
            size="medium"
            icon="fa-user"
            onChange={(value) => setUsername(value)}
          />
        )}
        <Field
          placeholder="Email"
          type="email"
          size="medium"
          icon="fa-envelope"
          onChange={(value) => setEmail(value)}
        />
        <Field
          placeholder="Password"
          type="password"
          size="medium"
          icon="fa-lock"
          onChange={(value) => setPassword(value)}
        />
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="buttons">
          <button
            className="button"
            // disabled={state.fetching}
            onClick={mutate}
          >
            {isLogin ? "login" : "create account"}
          </button>
          <button
            className="button"
            // disabled={state.fetching}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "need to create an account?"
              : "already have an account?"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
