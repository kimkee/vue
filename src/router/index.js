import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import List from "../components/List.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        component: Home ,
    },
    {
        path: "/list",
        component: List,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;