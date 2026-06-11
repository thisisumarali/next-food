import Link from 'next/link'
import Cards from '../Cards'

const menuItems = [
  { image: '/assets/menu/burger-11.jpg', title: 'Crispy Chicken', paragraph: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw', rating: 5, price: '9.15' },
  { image: '/assets/menu/burger-12.jpg', title: 'Ultimate Bacon', paragraph: 'House patty, cheddar cheese, bacon, onion, mustard', rating: 4.5, price: '9.32' },
  { image: '/assets/menu/burger-13.jpg', title: 'Black Sheep', paragraph: 'American cheese, tomato relish, avocado, lettuce, red onion', rating: 4, price: '6.15' },
  { image: '/assets/menu/burger-14.jpg', title: 'Vegan Burger', paragraph: 'House patty, cheddar cheese, bacon, onion, mustard', rating: 3.5, price: '9.25' },
  { image: '/assets/menu/burger-15.jpg', title: 'Double Burger', paragraph: '2 patties, cheddar cheese, mustard, pickles, tomatoes', rating: 3, price: '5.25' },
  { image: '/assets/menu/burger-16.jpg', title: 'Turkey Burger', paragraph: 'Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles', rating: 3, price: '7.18' },
  { image: '/assets/menu/burger-17.jpg', title: 'Smokey House', paragraph: 'Patty, cheddar cheese, onion, lettuce, tomatoes, pickles', rating: 2.5, price: '9.19' },
  { image: '/assets/menu/burger-18.jpg', title: 'Classic Burger', paragraph: 'Cheddar cheese, ketchup, mustard, pickles, onion', rating: 2, price: '8.12' },
]

export default function Section3() {
  return (
    <section className="menu_section">
      <div className="menu_container">
        <div className="menu_header">
          <span className="section-tag">Our Menu</span>
          <h2 className="section-title">Our Crazy Burgers</h2>
          <p className="section-subtitle">
            Handcrafted with fire and love — pick your favourite from our legendary lineup.
          </p>
        </div>

        <div className="menu_grid">
          {menuItems.map((item, i) => (
            <Cards key={i} {...item} />
          ))}
        </div>

        <div className="menu_ads">
          <div className="ads_box ads_img1">
            <div className="ads_box_content">
              <h4>GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link href="/" className="btn-primary-red">Learn More</Link>
            </div>
          </div>
          <div className="ads_box ads_img2">
            <div className="ads_box_content">
              <h4>SPECIAL COMBO</h4>
              <h5>SAVE 20%</h5>
              <Link href="/" className="btn-primary-yellow">Order Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
