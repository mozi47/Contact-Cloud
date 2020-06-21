import React, { useReducer } from "react";
import AlertContext from "../Alert/AlertContext";
import { v4 as uuidv4 } from "uuid";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../context/types";

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //SET ALERT
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
