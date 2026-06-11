import Image from 'next/image'
import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'

const perks = [
  'Premium beef patties sourced from local farms',
  'Freshly baked buns delivered each morning',
  'No preservatives — 100% natural ingredients',
]

export default function Section4() {
  return (
    <>
      <section className="promotion_section">
        <div className="promotion_container">
          <div className="promo_image">
            <Image src="/assets/promotion/pro.png" alt="Promotion" width={500} height={500} loading="lazy" />
          </div>
          <div className="promo_content">
            <span className="section-tag">Our Promise</span>
            <h2 className="section-title">
              Nothing Brings People Together Like a Burger
            </h2>
            <p>
              From the first bite to the last crumb, every burger we make is
              built on the belief that great food creates great moments.
            </p>
            <ul className="promo_list">
              {perks.map((p, i) => (
                <li key={i}>
                  <span className="promo_check"><FiCheck /></span>
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/" className="btn-primary-red">Discover Our Story</Link>
          </div>
        </div>
      </section>

      <div className="bg_parallax_scroll" />
    </>
  )
}
