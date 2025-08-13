import { component$ } from '@builder.io/qwik'

export default component$(({ children }: { children: any }) => {
	return (
		<div>
			<header>
				<h2>Qwik Standard Project</h2>
			</header>
			<main>{children}</main>
			<footer>
				<small>&copy; 2025 Qwik Standard</small>
			</footer>
		</div>
	)
})
