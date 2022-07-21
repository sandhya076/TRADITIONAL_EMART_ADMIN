import axios from "axios";

const BASE_URL = "https://server-emart1.herokuapp.com/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDFhMDMzZWY0NWE1ZjYwM2Y4NmNiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzkwNTY4OCwiZXhwIjoxNjU4MTY0ODg4fQ.gKApqu5vOgLOqj7tvfqy3-BjBpuduD8enjgdt_ervcA";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
