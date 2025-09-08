"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/#courses', label: 'Courses' },
  { href: '/#demo-classes', label: 'Demo Classes' },
  { href: '/trainers-register', label: 'Trainers' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      // hide only after some scroll threshold
      setHidden(goingDown && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 flex items-center border-b border-gray-800 px-6 md:px-10 py-4 w-full justify-between bg-gray-900/80 backdrop-blur-sm transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center gap-3">
        <div className="size-8 text-[--primary-color]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path></svg>
        </div>
        <h2 className="text-white text-xl font-bold">Ram Tech Solutions</h2>
      </div>
      <nav className="flex items-center gap-2">
        {nav.map((n) => {
          const active = n.href === '/' ? pathname === '/' : pathname.startsWith(n.href)
          return (
            <Link
              key={n.href}
              href={n.href}
              className={
                `px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 transition-transform hover:-translate-y-px ` +
                (active ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800')
              }
            >
              {n.label}
            </Link>
          )
        })}
      </nav>
      <div className="flex items-center gap-4">
        <a href="#request-info" className="flex items-center justify-center rounded-full h-10 px-6 bg-[--primary-color] text-white text-sm font-bold hover:bg-indigo-500 transition-colors transition-transform hover:-translate-y-px">Request Info</a>
      </div>
    </header>
  )
}
