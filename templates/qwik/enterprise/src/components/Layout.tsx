import { component$ } from '@builder.io/qwik'

export default component$(({ children }: { children: any }) => {
	return (
		<div>
			<header>
				<h2>Qwik Enterprise Project</h2>
			</header>
			<main>{children}</main>
			<footer>
				<small>&copy; 2025 Qwik Enterprise</small>
			</footer>
		</div>
	)
})
