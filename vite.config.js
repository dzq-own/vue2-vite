import { defineConfig } from 'vite';
import {createVuePlugin} from "vite-plugin-vue2";
// eslint-disable-next-line no-unused-vars
import vitePluginRequire from "vite-plugin-require";
const {resolve} = require('path')

export default defineConfig({
    base: '',
    plugins: [
        createVuePlugin({
            jsx: true
        }),
        /// 启用时此插件会报错，原因未知...
        // vitePluginRequire()
    ],
    resolve: {
        alias: {
            alias: {
                '@': resolve(__dirname, 'src'),
                '@assets': resolve(__dirname, 'src/assets'),
                '@components': resolve(__dirname, 'src/components'),
                '@views': resolve(__dirname, 'src/views'),
                '@api': resolve(__dirname, 'src/api'),
                '@utils': resolve(__dirname, 'src/utils'),
                '@js': resolve(__dirname, 'src/js'),
                '@mixins': resolve(__dirname, 'src/mixins')
            }
        },
        extensions: ['.vue', '.js', '.jsx']
    },
    server: {
        proxy: {

        }
    }
})

