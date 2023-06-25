/* eslint-disable */
// @ts-nocheck
import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
    return {
        plugins: [
            vue(),
            viteMockServe({
                mockPath: 'mock',
                enable: true
            }),
            AutoImport({
                imports: ['vue', 'vue-router', 'pinia'],
                dts: false,
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                dts: false,
                resolvers: [ElementPlusResolver()]
            }),
            createSvgIconsPlugin({
                // 图标的路径位置
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]'
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "./src/styles/global.scss";`,
                    javascriptEnabled: true
                }
            }
        },
        server: {
            host: '0.0.0.0',
            proxy: {
                // 代理标识
                '/api': {
                    // 实际请求地址
                    target: 'http://xxxx:xxxx:3007/api',
                    // 开启跨域
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
                }
            }
        }
    }
}
