import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div id='forhead'>Header</div>
    <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user/domfvm'>User</Link>
    </div>
    </>
  )
}

export default Header