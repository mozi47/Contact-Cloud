import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContactState from "./component/context/contact/ContactState";
import AuthState from "./component/context/auth/AuthState";
import AlertState from "./component/Alert/AlertState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <App />
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
