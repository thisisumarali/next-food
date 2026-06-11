import './index.css'
import './HomeStyle.css'
import './HeaderStyles.css'

export const metadata = {
  title: 'Tasty Food',
  description: 'Fresh & Handcrafted Daily — Premium Burgers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
