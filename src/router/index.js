import { createWebHashHistory, createRouter } from "vue-router";
import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
import HeaderSub from "../components/HeaderSub.vue";
import Home from "../components/Home.vue";
import List from "../components/List.vue";
import Write from "../components/Write.vue";
import View from "../components/View.vue";

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