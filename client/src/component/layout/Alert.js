import React, { useContext } from "react";
import AlertContext from "../Alert/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext);
  const { alerts } = context;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div className={`alert alert-${alert.type}`} key={alert.id}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alert;
