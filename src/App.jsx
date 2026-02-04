import { useState } from 'react'
import './App.css'
import SupportScreen from './components/SupportScreen'
import FloatingChatButton from './components/FloatingChatButton'

function App() {
  const [showSupport, setShowSupport] = useState(false)

  const openSupport = () => setShowSupport(true)
  const closeSupport = () => setShowSupport(false)

  return (
    <>
      <div className='items-center justify-center flex flex-col min-h-screen bg-gray-100'>
        <h1 className='text-3xl font-bold mb-4'>AIspire</h1>
      </div>

      {/* Floating Chat Button */}
      {!showSupport && <FloatingChatButton onClick={openSupport} />}

      {/* Support Screen */}
      {showSupport && <SupportScreen onClose={closeSupport} />}
    </>
  )
}

export default App
