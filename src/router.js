import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/tutorials",
        name: "tutorials",
        component: () => import("./components/Tutorialslist")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddTutorial")
    },
    {
        path: "/tutorials/:id",
        name: "tutorial-details",
        component: () => import("./components/Tutorial")
    },
    {
        path: "/published",
        name: "published",
        component: () => import("./components/Publishedlist")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;