import { createRouter, createWebHistory} from 'vue-router'
import Home from './components/HoMe.vue'
import Smoothing from './components/apps/smoothing/Smoothing.vue'
import DMS from './components/apps/dms/DMS.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/smoothing', component: Smoothing },
    { path: '/dms', component: DMS }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})