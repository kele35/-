import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './menu'
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

export default router