import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiShoppingBag, FiPlus } from 'react-icons/fi'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const renderStars = (rating) => {
  const stars = []
  let r = rating
  for (let i = 0; i < 5; i++) {
    if (r >= 1) { stars.push(<BsStarFill key={i} className="star-fill" />); r-- }
    else if (r > 0) { stars.push(<BsStarHalf key={i} className="star-half" />); r = 0 }
    else { stars.push(<BsStar key={i} className="star-empty" />) }
  }
  return stars
}

export default function Cards({ image, rating, title, paragraph, price }) {
  return (
    <div className="menu_card">
      <div className="menu_card_img">
        <Image src={image} alt={title} width={300} height={220} loading="lazy" />
        <div className="menu_card_overlay">
          <Link href="/" className="add_to_cart_btn">
            <FiShoppingBag /> Add to Cart
          </Link>
        </div>
      </div>
      <div className="menu_card_body">
        <div className="menu_card_top">
          <div className="stars">{renderStars(rating)}</div>
          <button className="wishlist_btn" aria-label="Wishlist"><FiHeart /></button>
        </div>
        <h5>{title}</h5>
        <p>{paragraph}</p>
        <div className="menu_card_footer">
          <span className="price_tag">${price}</span>
          <button className="quick_add" aria-label="Add"><FiPlus /></button>
        </div>
      </div>
    </div>
  )
}
