'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiShoppingBag } from 'react-icons/fi'
import { HiX } from 'react-icons/hi'

const navItems = ['Home', 'About', 'Our Menu', 'Shop', 'Blog', 'Contact']

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header>
      <nav className={`navbar-custom${sticky ? ' sticky' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <Image src="/assets/logo/logo.png" alt="Logo" width={120} height={40} priority />
          </Link>

          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}>
                <Link href={item === 'Home' ? '/' : '#'}>{item}</Link>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link href="#" className="nav-cart">
              <FiShoppingBag />
              <span className="cart-badge">3</span>
            </Link>

            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <HiX />
        </button>
        {navItems.map(item => (
          <Link key={item} href={item === 'Home' ? '/' : '#'} onClick={() => setMenuOpen(false)}>
            {item}
          </Link>
        ))}
      </div>
    </header>
  )
}
