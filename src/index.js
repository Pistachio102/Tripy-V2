import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = "JWT ".concat(token);
}

ReactDOM.render(<App />, document.getElementById("root"));
