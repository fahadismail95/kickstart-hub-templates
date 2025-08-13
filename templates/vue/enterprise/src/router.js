import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './modules/dashboard/Dashboard.vue'
import Login from './modules/auth/Login.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/dashboard', component: Dashboard },
	{ path: '/login', component: Login },
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
