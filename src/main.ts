import {ViteSSG} from 'vite-ssg'
import App from './App.vue'
import routes from './router' // 确保你已经创建了 router 文件
import {ID_INJECTION_KEY} from 'element-plus'

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";
// import ElementPlus from 'element-plus'

// or use cdn, uncomment cdn link in `index.html`

import 'highlight.js/styles/default.css';
import 'markdown-it-icons/dist/index.css';

import "~/styles/index.scss";
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import "uno.css";

import Markdown from 'vue3-markdown-it';

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/notification.scss";

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    {routes},
    // function to have custom setups
    ({app, router, routes, isClient, initialState}) => {
        // install plugins etc.
        app.provide(ID_INJECTION_KEY, {
            prefix: 100,
            current: 0,
        })
        app.use(Markdown)
        // app.use(ElementPlus, {size: 'small', zIndex: 3000})
    },
)
