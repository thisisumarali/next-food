import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlinePlay } from "react-icons/hi";

export default function Section1() {
  return (
    <section className="hero_section">
      <div className="hero_inner">
        <div className="hero_image_wrap">
          <Image
            src="/assets/hero/hero-2.png"
            alt="Signature Burger"
            width={560}
            height={560}
            className="hero_main_img"
            style={{ width: "100%", maxWidth: "560px", height: "auto" }}
            priority
          />
          <div className="hero_price_badge">
            <span className="only">Only</span>
            <span className="price">$14.99</span>
          </div>
        </div>

        <div className="hero_text">
          <div className="hero_eyebrow">
            <span className="hero_dot" />
            <span>Fresh &amp; Handcrafted Daily</span>
          </div>
          <h1 className="hero_title">
            Tasty
            <span className="accent">Food</span>
          </h1>
          <p className="hero_subtitle">Explore More</p>
          <p className="hero_desc">
            Bite into something unforgettable. Our burgers are made with premium
            ingredients, stacked tall, and packed with flavor — every single
            time.
          </p>
          <div className="hero_actions">
            <Link href="/" className="btn-primary-yellow">
              <FiShoppingBag /> Order Now
            </Link>
            <Link href="/" className="btn-outline-white">
              <HiOutlinePlay /> Watch Story
            </Link>
          </div>
          <div className="hero_stats">
            {[
              { num: "200+", label: "Menu Items" },
              { num: "50K+", label: "Happy Customers" },
              { num: "30min", label: "Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="hero_stat_num">{s.num}</div>
                <div className="hero_stat_label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
