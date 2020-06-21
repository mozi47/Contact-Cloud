import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../Alert/AlertContext";
import AuthContext from "../context/auth/AuthContext";

const Login = (props) => {
  const alertcontext = useContext(AlertContext);
  const authcontext = useContext(AuthContext);
  const { setAlert } = alertcontext;
  const { login, clearError, error, isAuthenticated } = authcontext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "invalid credential") {
      setAlert(error, "danger");
      clearError();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = User;

  const onChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      setAlert("Please Enter All field", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="passowrd">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default Login;
