import React, { useState } from 'react'
import "./Header.css"

const Header = () => {

  const [now, setNow] = useState (new Date())


  setInterval(()=>setNow(new Date()),1000)

  return (
    <header className='header'>
      <h3 >Result University</h3>

    <span> Время сейчас:{now.toLocaleTimeString()}</span>

    </header >
  )
}

export default Header