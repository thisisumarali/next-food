import Image from 'next/image'
import Link from 'next/link'

const brands = [
  '/assets/brands/brand-11.png',
  '/assets/brands/brand-12.png',
  '/assets/brands/brand-13.png',
  '/assets/brands/brand-14.png',
  '/assets/brands/brand-15.png',
  '/assets/brands/brand-16.png',
  '/assets/brands/brand-17.png',
  '/assets/brands/brand-18.png',
]
const doubled = [...brands, ...brands]

export default function Section5() {
  return (
    <>
      <section className="shop_section">
        <div className="shop_container">
          <div className="shop_content">
            <span className="section-tag">Mobile App</span>
            <h4>Download Our App &amp;</h4>
            <h2>Save Up to 20%</h2>
            <p>Exclusive deals, faster checkout, and real-time order tracking — all in your pocket.</p>
            <div className="store_badges">
              <Link href="/" className="store_badge">
                <Image src="/assets/shop/appstore.png" alt="App Store" width={130} height={40} loading="lazy" />
              </Link>
              <Link href="/" className="store_badge">
                <Image src="/assets/shop/googleplay.png" alt="Google Play" width={130} height={40} loading="lazy" />
              </Link>
            </div>
          </div>
          <div className="shop_image">
            <Image src="/assets/shop/e-shop.png" alt="App mockup" width={400} height={400} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="brand_section">
        <div className="brand_container">
          <p className="brand_label">Our Trusted Partners</p>
          <div className="brands_track_wrap">
            <div className="brands_track">
              {doubled.map((b, i) => (
                <div className="brand_item" key={i}>
                  <Image src={b} alt={`brand-${i}`} width={100} height={50} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
