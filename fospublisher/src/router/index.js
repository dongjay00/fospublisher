import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Timeline from "../views/Timeline.vue";
import Login from "../views/member/Login.vue";
import FindPassword from "../views/member/FindPassword.vue";
import ChangePassword from "../views/member/ChangePassword.vue";
import Register from "../views/member/Register.vue";
import CheckPassword from "../views/member/CheckPassword.vue";
import Main from "../views/past/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("userId")) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("userId")) {
        next({ name: "Main" });
      } else {
        next();
      }
    },
  },
  {
    path: "/findPassword",
    name: "FindPassword",
    component: FindPassword,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("userId")) {
        next({ name: "Main" });
      } else {
        next();
      }
    },
  },
  {
    path: "/changePassword",
    name: "ChangePassword",
    component: ChangePassword,
    props: true,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("userId")) {
        next({ name: "Main" });
      } else {
        next();
      }
    },
  },
  {
    path: "/checkPassword",
    name: "CheckPassword",
    component: CheckPassword,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("userId")) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("userId")) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
