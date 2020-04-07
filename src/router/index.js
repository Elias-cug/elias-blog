import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Main",
        component: () => import("@/views/main/index.vue")
      }
    ]
  },

  {
    path: "/blog",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Blog",
        component: () => import("@/views/blog/index.vue")
      }
    ]
  },

  {
    path: "/diary",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Diary",
        component: () => import("@/views/diary/index.vue")
      }
    ]
  },

  {
    path: "/introduce",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Introduce",
        component: () => import("@/views/introduce/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
