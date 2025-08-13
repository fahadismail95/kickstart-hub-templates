import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './features/dashboard/Dashboard'
import Login from './features/auth/Login'
import Home from './pages/Home'

export default function App() {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link> | <Link to='/dashboard'>Dashboard</Link> |{' '}
				<Link to='/login'>Login</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	)
}
