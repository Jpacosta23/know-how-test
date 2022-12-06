import React from 'react'
import { Routes as AppRoutes, Route } from 'react-router-dom'
import NavBar from '../components/organisms/AppBar/AppBar'
import Favorites from '../pages/Favorites/Favorites'
import Search from '../pages/Search/Search'

const Routes = () => {
  return (
    <>
      <NavBar />
      <AppRoutes>
        <Route path="/" element={<Search />} exact />
        <Route path="/favorites" element={<Favorites />} exact />
      </AppRoutes>
    </>
  )
}

export default Routes
