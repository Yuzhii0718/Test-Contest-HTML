/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*'


export {} // 这个很有用
// import axios from 'axios' // 如果有一个import引入，就不需要export｛｝

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    ASSETS_URL: string;
  }
}

