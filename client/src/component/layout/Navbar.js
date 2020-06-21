import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import ContactContext from "../context/contact/ContactContext";

const Navbar = ({ title, icon }) => {
  const context = useContext(AuthContext);
  const contactcontext = useContext(ContactContext);
  const { user, isAuthenticated, logout } = context;
  const { clearContacts } = contactcontext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLink = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Contact Cloud",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
