import {createRouter, createWebHistory, createMemoryHistory} from 'vue-router'
import {RouteRecordRaw} from 'vue-router'
import MainPage from '../components/MainPage.vue'
import Comment01 from "../components/comment/comment01.vue";
import Comment02 from "../components/comment/comment02.vue";
import Comment03 from "../components/comment/comment03.vue";
import CN from "../components/organization/cn.vue";
import NASA from "../components/organization/nasa.vue";
import SpaceX from "../components/organization/spacex.vue";
import EU from "../components/organization/eu.vue";
import About from '../components/About.vue'
import QA from "../components/QA.vue";
import Resources from "../components/Resources.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/Test-Contest-HTML/',
        name: 'Home',
        component: MainPage
    },
    {
        path: '/Test-Contest-HTML/comment/01/',
        name: 'Comment01',
        component: Comment01
    },
    {
        path: '/Test-Contest-HTML/comment/02/',
        name: 'Comment02',
        component: Comment02
    },
    {
        path: '/Test-Contest-HTML/comment/03/',
        name: 'Comment03',
        component: Comment03
    },
    {
        path: '/Test-Contest-HTML/organization/cn/',
        name: 'CN',
        component: CN
    },
    {
        path: '/Test-Contest-HTML/organization/nasa/',
        name: 'NASA',
        component: NASA
    },
    {
        path: '/Test-Contest-HTML/organization/spacex/',
        name: 'SpaceX',
        component: SpaceX
    },
    {
        path: '/Test-Contest-HTML/organization/eu/',
        name: 'EU',
        component: EU
    },
    {
        path: '/Test-Contest-HTML/about/',
        name: 'About',
        component: About
    },
    {
        path: '/Test-Contest-HTML/qa/',
        name: 'QA',
        component: QA
    },
    {
        path: '/Test-Contest-HTML/resources/',
        name: 'Resources',
        component: Resources
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/Test-Contest-HTML/'
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