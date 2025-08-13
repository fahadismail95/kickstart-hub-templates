import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<header>
				<h2>Remix Enterprise Project</h2>
			</header>
			<main>{children}</main>
			<footer>
				<small>&copy; 2025 Remix Enterprise</small>
			</footer>
		</div>
	)
}
