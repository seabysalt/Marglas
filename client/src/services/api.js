import axios from "axios";

const login = (username, password) =>
  axios
    .post("/api/auth/login", { username: username, password: password })
    .then(response => response.data);

const signup = (username, password) =>
  axios
    .post("/api/auth/signup", { username: username, password: password })
    .then(response => response.data);

const logout = () =>
  axios.post("/api/auth/logout").then(response => response.data);

export { login, logout, signup };
