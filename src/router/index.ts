import {createRouter, createWebHistory, createMemoryHistory} from 'vue-router'
import {RouteRecordRaw} from 'vue-router'
import MainPage from '../components/MainPage.vue'
import Comment01 from "../components/comment/comment01.vue";
import Comment02 from "../components/comment/comment02.vue";
import Comment03 from "../components/comment/comment03.vue";
import Post01 from "../components/post/post01.vue";
import Post02 from "../components/post/post02.vue";
import Post03 from "../components/post/post03.vue";
import Post04 from "../components/post/post04.vue";
import Summary from "../components/basic/summary.vue";
import About from '../components/About.vue'
import QA from "../components/QA.vue";
import Resources from "../components/Resources.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: MainPage
    },
    {
        path: '/comment01',
        name: 'Comment01',
        component: Comment01
    },
    {
        path: '/comment02',
        name: 'Comment02',
        component: Comment02
    },
    {
        path: '/comment03',
        name: 'Comment03',
        component: Comment03
    },
    {
        path: '/post01',
        name: 'Post01',
        component: Post01
    },
    {
        path: '/post02',
        name: 'Post02',
        component: Post02
    },
    {
        path: '/post03',
        name: 'Post03',
        component: Post03
    },
    {
        path: '/post04',
        name: 'Post04',
        component: Post04
    },
    {
        path: '/summary',
        name: 'Summary',
        component: Summary
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/qa',
        name: 'QA',
        component: QA
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const isServer = typeof window === 'undefined';
const history = isServer
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL);

const routerOptions = {
    history: history,
    routes,
}

const router = createRouter(routerOptions);

export default routes