import { createWebHashHistory, createRouter } from "vue-router";
import Nav from "./views/Nav.vue";
import Header from "./components/Header.vue";
import HeaderSub from "./components/HeaderSub.vue";
import Home from "./views/Home.vue";
import List from "./views/List.vue";
import Write from "./views/Write.vue";
import View from "./views/View.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // {
            // path: "/",
            // redirect: '/home' 
        // },
        {
            path: '/',
            components: {
                default: Home,
                Header,
                Nav
            }
        },
        {
            path: "/list",
            components: {
                default: List,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/write",
            components: {
                default: Write,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/view/:id",
            name: "view",
            components: {
                default: View,
                HeaderSub,
                Nav
            }
        }
    ],
});

export default router;