import axios from "axios";
import store from "@/store";
import { API_BASE_URL } from "../config";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYyMDIwMTk0MywiZXhwIjoxNjIwMjg4MzQzfQ.lpAEYsdMrd0oApE8Uoxuh4_QPNwA-6rkxilUHvs4DdY";
// token이 필요없는 요청 및 응답 interceptor (에러 저장)
const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.response.use(
  function(response) {
    store.commit("error/setValidationError", {});
    return response;
  },

  function(error) {
    // vuex에 있는 validation에 error넣어주기
    if (error.response.status === 422) {
      store.commit("error/setValidationError", error.response.data.data);
    } else {
      return Promise.reject(error);
    }
  }
);

// token이 필요한 요청 및 interceptor (토큰 저장)
const authInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

authInstance.interceptors.request.use(function(config) {
  // if (localStorage.getItem("token")) {
  config["headers"] = {
    // user: `${localStorage.getItem("token")}`,
    user: token,
    // user: `${store.state.auth.token}`,
    // };
  };
  console.log("요청인터셉터에서 토큰");
  // console.log("index.js에서 체크 중인 토큰 : ", localStorage.getItem("token"));
  // console.log(store.state.auth.token);
  return config;
});

authInstance.interceptors.response.use(
  function(response) {
    store.commit("error/setValidationError", {});

    return response;
  },
  function(error) {
    // vuex에 있는 validation에 error넣어주기
    if (error.response.status === 422) {
      store.commit("error/setValidationError", error.response.data.data);
    } else {
      return Promise.reject(error);
    }
  }
);
// export { createInstance, authorizationInstance };
export { instance, authInstance };
