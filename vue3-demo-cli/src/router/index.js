import VueRouter from 'vue-router'
import First from '../Views/First.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'First',
	component: First
}]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
