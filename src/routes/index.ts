// @ts-nocheck
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoute
    // 滚动行为
    // scrollBihavior() {
    //     return { left: 0, top: 0 }
    // }
})

export default router
