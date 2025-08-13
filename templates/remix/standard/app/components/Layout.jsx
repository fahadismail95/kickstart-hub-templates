import React from 'react'

export default function Layout({ children }) {
	return (
		<div>
			<header>
				<h2>Remix Standard Project</h2>
			</header>
			<main>{children}</main>
			<footer>
				<small>&copy; 2025 Remix Standard</small>
			</footer>
		</div>
	)
}
