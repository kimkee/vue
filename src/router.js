import { createWebHashHistory, createRouter } from "vue-router";
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import HeaderSub from "./components/HeaderSub.vue";
import Home from "./views/Home.vue";
import Photo from "./views/photo/Photo.vue";
import PhotoWrite from "./views/photo/Write.vue";
import PhotoModify from "./views/photo/Modify.vue";
import PhotoView from "./views/photo/View.vue";

import Works from "./views/Works.vue";
import Pop from "./views/Pop.vue";

import List from "./views/bbs/List.vue";
import Write from "./views/bbs/Write.vue";
import Modify from "./views/bbs/Modify.vue";
import View from "./views/bbs/View.vue";

import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import SignOut from "./views/SignOut.vue";
import Chat from "./views/chat/Chat.vue";
import User from "./views/user/User.vue";
// import store from "./store";
// import ui from './ui.js';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // {
        // path: "/",
        // redirect: '/home'
        // },
        {
            path: '/chat',
            name: "Chat",
            // components: ()=> import ("./views/Home.vue")
            components: {
                default: Chat,
                HeaderSub,
                
            }
        },
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
            },
            children: [
                {
                    // /user/:id/profile 과 일치 할 때
                    // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
                    name:'pop',
                    path: '/works/:id',
                    component: Pop
                }
            ]
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
            path: "/photo/:id",
            name: "photoView",
            components: {
                default: PhotoView,
                HeaderSub,
            }
        },
        {
            path: "/photo/write",
            components: {
                default: PhotoWrite,
                HeaderSub,
            }
        },
        {
            path: "/photo/:id/modify",
            components: {
                default: PhotoModify,
                HeaderSub,
            }
        },
        {
            path: "/bbs",
            components: {
                default: List,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/bbs/write",

            components: {
                default: Write,
                HeaderSub,
            }
        },
        {
            path: "/bbs/:id/modify",
            components: {
                default: Modify,
                HeaderSub,
            }
        },
        {
            path: "/bbs/:id",
            name: "bbsView",
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
            // beforeEnter: () => {
            //     localStorage.setItem("preurl", location.hash);
            // },
            components: {
                default: SignIn,
                HeaderSub,
                Nav
            }
        },
        {
            path: "/signout/",
            name: "signout",
            // beforeEnter: (to, from, next) => {
            //     console.table(store.state.userInfo);
            //     ui.confirm("로그아웃 하시겠습니까?", {
            //         ycb: () => {
            //             localStorage.setItem("preurl", location.hash);
            //             return next();
            //         },
            //         ccb: () => { from(); },
            //         ybt: "예",
            //         nbt: "아니오",
            //     });
            //     // if(confirm("로그아웃 하시겠습니까?")){
            //     //     localStorage.setItem("preurl", location.hash);
            //     //     return next();
            //     // }
            // },
            components: {
                default: SignOut,
            }
        }
        ,
        {
            path: "/user/:id",
            name: "user",
            components: {
                default: User,
                HeaderSub,
                Nav
            }
        },
    ],
});

export default router;