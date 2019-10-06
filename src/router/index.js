import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    children: [
      {
        path: "",
        components: {
          Who: () => import("@/views/Who"),
          When: () => import("@/views/When"),
          What: () => import("@/views/What")
        }
      }
    ]
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
