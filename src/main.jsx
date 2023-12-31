import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/index.js";
import { getAccessToken } from "./utils/localstorage.js";
import { fetchMe } from "./features/auth/slice/auth-slice.js";
// import AuthContextProvider from "../contexts/AuthContext.jsx";

if (getAccessToken()) {
  store.dispatch(fetchMe());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
