import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardGrid from './components/DashboardGrid'
import LandingPage from './LandingPage'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Success from './pages/Success'
import Portal from './pages/Portal'
import Waitlist from './pages/Waitlist'
import ConvertKitModal from './components/ConvertKitModal'

function DashboardApp() {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Overview</h1>
          <p className="text-gray-400">Welcome back to Nexus UI. Here is your system status.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="glass-button">Back to Marketing</Link>
          <button className="glass-button bg-nexus-accent/10 border-nexus-accent/50 text-nexus-accent">Generate Report</button>
        </div>
      </div>
      
      <DashboardGrid />
    </Layout>
  )
}

function App() {
  return (
    <Router>
      <ConvertKitModal />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/success" element={<Success />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/app" element={<DashboardApp />} />
      </Routes>
    </Router>
  )
}

export default App
