import './globals.css'
import type { Metadata } from 'next'
import AppHeaderController from '../components/AppHeaderController'

export const metadata: Metadata = {
  title: 'Ram Tech Solutions',
  description: 'Ram Tech Institute website built with Next.js and Supabase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body>
        <AppHeaderController />
        <main>{children}</main>
      </body>
    </html>
  )
}
