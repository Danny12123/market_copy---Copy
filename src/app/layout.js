import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wesley Grammar Senior High School',
  description: 'Negotiate on the item you when to buy..',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
