import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Quote from "../views/Quote.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/blog/:slug",
    name: "blog-content",
    component: () => import("../views/BlogContent.vue"),
  },
  {
    path: "/projet/:id",
    name: "project-content",
    component: () => import("@/views/ProjectContent.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/devis",
    name: "quote",
    component: Quote,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80, // Offset for fixed header
      };
    }

    return { top: 0, behavior: "smooth" };
  },
});

export default router;
