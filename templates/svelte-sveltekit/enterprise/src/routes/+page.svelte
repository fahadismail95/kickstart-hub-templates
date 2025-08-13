<script>
  import Layout from '../components/Layout.svelte';
  import { onMount } from 'svelte';
  import { fetchData } from '../services/api.js';
  let data = null;
  onMount(async () => {
    data = await fetchData();
  });
</script>
<Layout>
  <h1>Enterprise SvelteKit Home</h1>
  <pre>{JSON.stringify(data, null, 2)}</pre>
</Layout>
