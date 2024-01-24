import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { getToken } from "./storage/storgeService.ts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/bigPie";
axios.defaults.baseURL = "http://localhost:9090";
axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    /*
      if token exists we edit the request
      adding headers
      and sending the request to the server
    */
    config.headers["x-auth-token"] = token;
    /*
      headers = {
        x-auth-token:token
      }
    */
  }
  return config;
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
