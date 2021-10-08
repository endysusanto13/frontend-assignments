import { Button } from "components/button";
import { TextField } from "components/text-field";
import * as React from "react";
import { Link } from "react-router-dom";
// import { useLogin } from "../auth.state";


export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  // const login = useLogin();

  return (
    <div className="max-w-md mx-auto m-6 shadow-xl">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setStatus("loading");
          // login({ email, password }).catch(() => setStatus("error"));
        }}
        className="p-6 bg-opacity-25 bg-white"
      >
        {status === "error" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Fail to login.
          </div>
        )}
        <div className="text-3xl mt-4 mb-8 font-extrabold text-center text-indigo-600">
          Login
        </div>
        <div className="space-y-6">
          <TextField
            label="Email"
            value={email}
            onChangeValue={setEmail}
            name="username"
            id="username"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Password"
            value={password}
            onChangeValue={setPassword}
            name="password"
            id="password"
            type="password"
            required
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full text-base"
            disabled={status === "loading"}
          >
            Login
          </Button>
          <div className="flex justify-between
          ">
          <Button
            type="submit"
            variant="primary"
            className="w-8/12 text-base bg-indigo-900"
            disabled={status === "loading"}
          >
            Continue as Guest
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="w-3/12 text-base bg-indigo-900"
            disabled={status === "loading"}
          >
            Sign Up
          </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
