import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RPG-Henchman',
  description: 'RPG DND helper for 5e edition, make item, character, locations and monsters creation easier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  )
}
