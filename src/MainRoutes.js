import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import ContactPage from './pages/ContactPage'
import BasketPage from './pages/BasketPage'
import ReservePage from './pages/ReservePage'
import AboutUsPage from './pages/AboutUsPage'
import AdminPage from './pages/AdminPage'
import MenuPage from './pages/MenuPage'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='reserve' element={<ReservePage />} />
				<Route path='/contacts' element={<ContactPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/about-us' element={<AboutUsPage />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='/menu' element={<MenuPage />} />
			</Route>
		</Routes>
	)
}

export default MainRoutes
