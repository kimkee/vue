import { createWebHashHistory, createRouter } from "vue-router";
import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import List from "../components/List.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: '/home' 
        },
        {
            path: '/home',
            components: {
                default: Home,
                Header : Header,
                Nav : Nav,
            }
        },
        {
            path: "/list",
            component: List
        }
    ],
});

export default router;