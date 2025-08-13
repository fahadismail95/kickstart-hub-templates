import { createSignal, onMount } from 'solid-js'
import Layout from './components/Layout'
import { fetchData } from './services/api'
function App() {
	const [data, setData] = createSignal(null)
	onMount(async () => {
		setData(await fetchData())
	})
	return (
		<Layout>
			<h1>Enterprise SolidJS Home</h1>
			<pre>{JSON.stringify(data(), null, 2)}</pre>
		</Layout>
	)
}
export default App
