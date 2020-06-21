import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../Alert/AlertContext";
import AuthContext from "../context/auth/AuthContext";

const Register = (props) => {
  const alertcontext = useContext(AlertContext);
  const authcontext = useContext(AuthContext);
  const { setAlert } = alertcontext;
  const { register, clearError, error, isAuthenticated } = authcontext;
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "user already exists") {
      setAlert(error, "danger");
      clearError();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const { name, email, password, password2 } = User;

  const onChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please Enter All field", "danger");
    } else if (password !== password2) {
      setAlert("Please Not Match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passowrd">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Register Now"
            className="btn btn-block btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
