<template>
	<Layout>
		<h1>Enterprise Nuxt Home</h1>
		<pre>{{ data }}</pre>
	</Layout>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue'
import { fetchData } from '../services/api'
const data = ref(null)
onMounted(async () => {
	data.value = await fetchData()
})
</script>
