import React from 'react'
import { Netflix_Logo_Url } from '../Utils/logo'

const Header = () => {
  return (
    <header className="absolute w-full px-8 py-4 z-10">
      <img 
        src={Netflix_Logo_Url} 
        alt="Netflix Logo"
        className="w-32 md:w-40"
      />
    </header>
  )
}

export default Header