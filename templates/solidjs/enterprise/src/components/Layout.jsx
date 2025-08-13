function Layout(props) {
	return (
		<div>
			<nav>
				<a href='/'>Home</a> | <a href='/about'>About</a>
			</nav>
			<main>{props.children}</main>
		</div>
	)
}
export default Layout
