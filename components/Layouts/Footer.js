'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin, FiArrowUp, FiPhone } from 'react-icons/fi'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 300)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socials = [
    { icon: <FiFacebook />, href: '#' },
    { icon: <FiInstagram />, href: '#' },
    { icon: <FiLinkedin />, href: '#' },
    { icon: <FiYoutube />, href: '#' },
  ]

  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_grid">
            <div className="footer_col">
              <h5>Location</h5>
              <p>5505 Waterford District</p>
              <p>Waterford, Ireland</p>
              <p>United States</p>
            </div>
            <div className="footer_col">
              <h5>Working Hours</h5>
              <p>Mon–Fri: 9:00 AM – 10:00 PM</p>
              <p>Saturday: 10:00 AM – 8:30 PM</p>
              <p>Sunday: 12:00 PM – 5:00 PM</p>
            </div>
            <div className="footer_col">
              <h5>Order Now</h5>
              <p>Call us anytime and we&apos;ll have your meal ready.</p>
              <Link href="tel:9998887777" className="footer_phone">
                <FiPhone style={{ marginRight: 6, verticalAlign: 'middle', fontSize: '1rem' }} />
                999-888-777
              </Link>
            </div>
            <div className="footer_col">
              <h5>Follow Us</h5>
              <p>Stay connected for daily specials and offers.</p>
              <div className="social_links">
                {socials.map((s, i) => (
                  <Link key={i} href={s.href} className="social_link">{s.icon}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="footer_bottom">
            <p>© 2025 <span>Umar Khan</span>. All rights reserved.</p>
            <div className="footer_links">
              <Link href="#">About Us</Link>
              <Link href="#">Terms &amp; Conditions</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {isVisible && (
        <button className="scroll_top" onClick={scrollTop} aria-label="Scroll to top">
          <FiArrowUp />
        </button>
      )}
    </>
  )
}
