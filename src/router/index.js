import Vue from "vue";
import VueRouter from "vue-router";

import QuestionBox from "../views/QuestionBox.vue";
import Finished from "../views/Finished.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuestionBox",
    component: QuestionBox
  },
  {
    path: "/finished",
    name: "Finished",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Finished
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
