import {createWebHistory, createRouter} from "vue-router";
import vContactList from '@/components/contacts/v-contact-list'
import vContactUserInfo from '@/components/contacts/v-contact-user-info'


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

];

const router = createRouter({
    "history": createWebHistory(),
    routes,
});

export default router;