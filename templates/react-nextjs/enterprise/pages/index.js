import Layout from '../components/Layout'
import { fetchData } from '../services/api'
import { useEffect, useState } from 'react'
export default function Home() {
	const [data, setData] = useState(null)
	useEffect(() => {
		fetchData().then(setData)
	}, [])
	return (
		<Layout>
			<h1>Enterprise Home</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Layout>
	)
}
