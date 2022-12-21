import { createWebHashHistory, createRouter } from "vue-router";
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import HeaderSub from "./components/HeaderSub.vue";
import Home from "./views/Home.vue";
import Photo from "./views/Photo.vue";
import Works from "./views/Works.vue";
import List from "./views/List.vue";
import Write from "./views/Write.vue";
import Modify from "./views/Modify.vue";
import View from "./views/View.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import SignOut from "./views/SignOut.vue";
import store from "./store";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // {
            // path: "/",
            // redirect: '/home' 
        // },
        {
            path: '/',
            name: "home",
            // components: ()=> import ("./views/Home.vue")
            components: {
                default: Home,
                Header,
                Nav
            }
        },
        {
            path: "/works",
            components: {
                default: Works,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/photo",
            components: {
                default: Photo,
                HeaderSub,
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
            beforeEnter: (to, from, next) => {
                console.log(store.state.userInfo.stat);
                if (store.state.userInfo.stat == true) {
                    return next();
                }
                if(confirm("로그인 필요합니다.\n로그인페이지로 이동하시겠습니까?")){
                    next('/signin');        
                }else{
                    return next();
                }
            },
            components: {
                default: Write,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/modify/:id",
            components: {
                default: Modify,
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
                
            }
        },
        {
            path: "/signup/",
            name: "signup",
            components: {
                default: SignUp,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/signin/",
            name: "signin",
            components: {
                default: SignIn,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/signout/",
            name: "signout",
            beforeEnter: (to, from, next) => {
                console.table(store.state.userInfo);
                if(confirm("로그아웃 하시겠습니까?")){
                    return next();      
                }
            },
            components: {
                default: SignOut,
            }
        }
    ],
});

export default router;