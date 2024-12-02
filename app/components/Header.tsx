import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
  return (
    <header className='header'>
      <h1 className='logo'>Watch World</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart style={{color: 'white', fontSize:'24px'}}/>
      </nav>
    </header>
  )
}

export default Header