import Link from 'next/link'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineClock } from 'react-icons/hi'

export default function Section7() {
  return (
    <section className="cta_section">
      <div className="cta_inner">
        <span className="section-tag">Guaranteed</span>
        <h2>30-Minute Delivery!</h2>
        <p>
          Order now and we guarantee your food arrives hot at your door in under
          30 minutes — or your next meal is on us.
        </p>
        <div className="cta_actions">
          <Link href="tel:9998887777" className="btn-primary-yellow">
            <FiPhone /> Call: 999-888-7777
          </Link>
          <Link href="/" className="btn-outline-white">
            <HiOutlineClock /> Order Online
          </Link>
        </div>
      </div>
    </section>
  )
}
