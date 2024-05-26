import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main/Main.vue";
import AboutMe from "../views/AboutMe/AboutMe.vue";
import Project from "../views/Project/Project.vue";
import QnA from "../views/QnA/QnA.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/AboutMe",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/QnA",
    name: "QnA",
    component: QnA,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
