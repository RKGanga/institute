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
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null)

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

  // Handle ESC to close and focus management
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => firstMenuItemRef.current?.focus(), 0)
    // prevent body scroll when open
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(t)
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  // Restore focus to trigger when menu closes
  useEffect(() => {
    if (!menuOpen) menuButtonRef.current?.focus()
  }, [menuOpen])

  return (
    <header className={`sticky top-0 ${menuOpen ? 'z-[9999]' : 'z-50'} flex items-center border-b border-gray-800 px-4 sm:px-6 md:px-10 py-4 w-full justify-between bg-gray-900/80 backdrop-blur-sm transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center gap-3">
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          ref={menuButtonRef}
        >
          <span className="material-symbols-outlined text-2xl">{menuOpen ? 'close' : 'menu'}</span>
        </button>
        <div className="size-8 text-[--primary-color]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path></svg>
        </div>
        <h2 className="text-white text-xl font-bold">Ram Tech Solutions</h2>
      </div>
      <nav className="hidden md:flex items-center gap-2">
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
      <div className="hidden md:flex items-center gap-4">
        <a href="#request-info" className="flex items-center justify-center rounded-full h-10 px-6 bg-[--primary-color] text-white text-sm font-bold hover:bg-indigo-500 transition-colors transition-transform hover:-translate-y-px">Request Info</a>
      </div>
      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[10000] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 min-h-screen h-dvh w-fit min-w-[14rem] max-w-[90vw] md:w-80 md:max-w-none bg-gray-900 border-r border-gray-800 p-4 overflow-y-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Menu</h3>
              <button
                className="h-10 w-10 grid place-items-center rounded-md hover:bg-gray-800"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {nav.map((n, i) => {
                const active = n.href === '/' ? pathname === '/' : pathname.startsWith(n.href)
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    ref={i === 0 ? firstMenuItemRef : undefined}
                    className={
                      `px-3 py-2 rounded-md text-base font-medium whitespace-nowrap ` +
                      (active ? 'bg-gray-800 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800')
                    }
                  >
                    {n.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-4">
              <a href="#request-info" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center rounded-md h-10 px-4 bg-[--primary-color] text-white text-sm font-bold hover:bg-indigo-500">Request Info</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
