'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

const reviews = [
  { img: '/assets/blog/review-author-1.jpg', text: 'Honestly the best burger I have ever had. The brioche bun was perfectly toasted and the patty was juicy from edge to edge. I come back every week!', author: 'Amelie Newlove' },
  { img: '/assets/blog/review-author-2.jpg', text: 'Delivery was blazing fast and the food arrived piping hot. Their Crispy Chicken burger is an absolute must-try — I am completely hooked.', author: 'James Martinez' },
  { img: '/assets/blog/review-author-3.jpg', text: 'Perfect for family nights out. The kids love it, and so do the adults. Quality has been consistently excellent every single visit.', author: 'Sarah Thompson' },
  { img: '/assets/blog/review-author-5.jpg', text: 'I am a food blogger and this is genuinely in my top three burger joints. The flavour combinations are creative and the portions are generous.', author: 'Daniel Okafor' },
]

export default function Section6() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(a => (a + 1) % reviews.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="reviews_section">
      <div className="reviews_container">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: 48 }}>
          What Our Customers Say
        </h2>

        <div className="review_cards">
          {reviews.map((r, i) => (
            <div key={i} className={`review_card${i === active ? ' active' : ''}`}>
              <Image src={r.img} alt={r.author} width={64} height={64} className="review_avatar" loading="lazy" />
              <p className="review_text">&quot;{r.text}&quot;</p>
              <div className="review_stars">
                {[...Array(5)].map((_, j) => <BsStarFill key={j} style={{ color: 'var(--yellow)' }} />)}
              </div>
              <p className="review_author">{r.author}</p>
            </div>
          ))}
        </div>

        <div className="review_nav">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`review_dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
