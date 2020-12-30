import {createWebHistory, createRouter} from "vue-router";
import vContactList from '@/components/contacts/v-contact-list'
import vContactUserInfo from '@/components/contacts/v-contact-user-info'
import vUserList from '@/components/users/v-users-list'
import vUserChat from '@/components/users/chat/v-user-chat'



const routes = [
    {
        path: "/",
        name: "catalog",
        component: vContactList,
    },
    {
        path: "/contact",
        name: "contact",
        component: vContactUserInfo,
    },
    {
        path: "/chats",
        name: "chats",
        component: vUserList,
    },{
        path: "/chat",
        name: "chat",
        component: vUserChat,
        props: true
    },

];

const router = createRouter({
    "history": createWebHistory(),
    routes,
});

export default router;