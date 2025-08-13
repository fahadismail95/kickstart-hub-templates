import { createSignal } from 'solid-js'
import Layout from './components/Layout'
function App() {
	const [count, setCount] = createSignal(0)
	return (
		<Layout>
			<h1>Welcome to SolidJS Standard Home!</h1>
			<button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
		</Layout>
	)
}
export default App
