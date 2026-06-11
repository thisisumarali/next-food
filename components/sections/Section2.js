import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    src: '/assets/about/pizza.png',
    title: 'Original Recipes',
    desc: 'Every burger is crafted from our own original recipes — bold flavors developed over years of perfecting what makes a great bite.',
  },
  {
    src: '/assets/about/salad.png',
    title: 'Quality Ingredients',
    desc: 'We source fresh produce daily. No shortcuts — only premium meats, garden-fresh toppings, and artisan-baked buns.',
  },
  {
    src: '/assets/about/delivery-bike.png',
    title: 'Fastest Delivery',
    desc: 'Your food, hot and fresh at your door in 30 minutes or less. We guarantee it — every order, every time.',
  },
]

export default function Section2() {
  return (
    <section className="about_section">
      <div className="about_container">
        <div className="about_header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            The Burger Tastes Better<br />When You Share It
          </h2>
          <p className="section-subtitle">
            Real ingredients, real flavor, real fast. This is what we stand for.
          </p>
          <Link href="/" className="btn-primary-red" style={{ marginTop: 28 }}>
            Explore Full Menu
          </Link>
        </div>

        <div className="about_cards">
          {features.map((f, i) => (
            <div className="about_card" key={i}>
              <div className="about_icon_wrap">
                <Image src={f.src} alt={f.title} width={80} height={80} loading="lazy" />
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
