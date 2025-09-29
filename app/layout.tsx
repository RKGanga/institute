import './globals.css'
import type { Metadata } from 'next'
import AppHeaderController from '../components/AppHeaderController'
import ToastProvider from '../components/ToastProvider'

export const metadata: Metadata = {
  title: 'Upskillo',
  description: 'Upskillo website built with Next.js and Supabase',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon (place Image-1 at public/favicon.png) */}
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="overflow-x-hidden bg-gray-900 text-white">
        <ToastProvider>
          <AppHeaderController />
          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  )
}
