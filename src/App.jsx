import React from 'react'
import Header from './components/Header'
import ConferenceInfo from './components/ConferenceInfo'
import './styles/index.css'

function App() {
  return (
    <div className="app w-full max-w-[100vw] overflow-x-hidden relative">
      <Header />
      <ConferenceInfo />
    </div>
  )
}

export default App
