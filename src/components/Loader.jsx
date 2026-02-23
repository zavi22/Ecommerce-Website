import React from 'react'
import { assets } from '../assets/assets'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img src={assets.logo} alt="Logo" className="w-36 animate-pulse" />
      </div>
    </div>
  )
}

export default Loader
