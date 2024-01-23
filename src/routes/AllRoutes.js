import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    </div>
  )
}
