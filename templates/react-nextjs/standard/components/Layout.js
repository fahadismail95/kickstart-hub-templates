export default function Layout({ children }) {
	return (
		<div>
			<nav>
				<a href='/'>Home</a> | <a href='/about'>About</a>
			</nav>
			<main>{children}</main>
		</div>
	)
}
