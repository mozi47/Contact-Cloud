import React, { useReducer } from "react";
import AuthContext from "../auth/AuthContext";
import AuthReducer from "../auth/AuthReducer";
import setAuthtoken from "../../../utils/setAuthtoken";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERROR,
  LOGOUT,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    loading: true,
    isAuthenticated: null,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //LOAD USER
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthtoken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.msg });
    }
  };

  //REGISTER USER
  const register = async (formdata) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formdata, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  //LOGIN USER
  const login = async (formdata) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formdata, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };

  //LOGOUT
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  //CLEAR ERROR
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loadUser,
        clearError,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
