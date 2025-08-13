import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
	state: () => ({ user: null }),
	actions: {
		login(username, password) {
			this.user = { username }
		},
		logout() {
			this.user = null
		},
	},
})
