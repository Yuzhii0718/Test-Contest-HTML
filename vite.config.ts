import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'
import {
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    // define: {
    //     'process.env': '{}',
    // },
    base: './',
    resolve: {
        alias: {
            '~/': `${pathSrc}/`,
            // 需要使用 ssg 编译时，要把 vue 的别名注释掉
            'vue': 'vue/dist/vue.esm-bundler.js',
            "@": path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
                importLoaders: 1,
            },
            css: {
                importLoaders: 1,
            },
        },
    },
    ssr: {
        noExternal: ['element-plus', 'uno.css', 'unplugin-vue-components', 'unocss', 'vite-plugin-pages', 'gray-matter', 'v-md-editor', 'vite-plugin-vue', 'vite-ssg', 'vite'],
    },
    // build: {
    //     rollupOptions: {
    //         output: {
    //             inlineDynamicImports: true,
    //         },
    //     },
    // },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            // allow to autoload markdown components under `./src/components/`
            extensions: ['vue', 'md'],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: 'src/components.d.ts',
        }),

        // https://github.com/antfu/unocss
        // see unocss.config.ts for config
        Unocss({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                    warn: true,
                }),
            ],
            transformers: [
                transformerDirectives(),
                transformerVariantGroup(),
            ]
        }),
    ],
})
