import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/StartScreen.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
    children: [
      {
        path: "details/:id",
        name: "home-details",
        component: () => import("@/views/DetailsPage.vue"),
      },
    ],
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/views/FavoritesPage.vue"),
    children: [
      {
        path: "details/:id",
        name: "favorite-details",
        component: () => import("@/views/DetailsPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
