/**
 * @fileoverview Application root with router, layout (Header + Sidebar), and routes.
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import ProfilePage from './pages/ProfilePage'

/**
 * Root App component: sets up routing and persistent layout shell.
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Persistent layout */}
      <Header />
      <Sidebar />

      {/* Routed content */}
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/user/12" replace />} />
        {/* Profile page */}
        <Route path="/user/:id" element={<ProfilePage />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/user/12" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
