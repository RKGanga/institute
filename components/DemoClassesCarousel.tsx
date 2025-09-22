"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

type Demo = {
  id: number
  name: string
  faculty_name: string | null
  start_date: string | null
  timings: string | null
  description: string | null
}

export default function DemoClassesCarousel({ items }: { items: Demo[] }) {
  const list = useMemo(() => items ?? [], [items])
  const [index, setIndex] = useState(0)
  const hoverRef = useRef<HTMLDivElement | null>(null)
  // Single banner image for all slides, served from Next.js public/ folder
  const defaultBanner = '/demo-banner.jpg'
  // Touch swipe state
  const startX = useRef<number | null>(null)
  const deltaX = useRef<number>(0)

  useEffect(() => {
    if (list.length <= 1) return
    let paused = false
    const onEnter = () => { paused = true }
    const onLeave = () => { paused = false }
    const n = hoverRef.current
    n?.addEventListener('mouseenter', onEnter)
    n?.addEventListener('mouseleave', onLeave)

    const t = setInterval(() => {
      if (!paused) setIndex((i) => (i + 1) % list.length)
    }, 4000)
    return () => {
      clearInterval(t)
      n?.removeEventListener('mouseenter', onEnter)
      n?.removeEventListener('mouseleave', onLeave)
    }
  }, [list.length])

  // Touch handlers for swipe on mobile
  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    startX.current = e.touches[0].clientX
    deltaX.current = 0
  }
  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (startX.current === null) return
    deltaX.current = e.touches[0].clientX - startX.current
  }
  function onTouchEnd() {
    const threshold = 50 // px
    if (Math.abs(deltaX.current) > threshold) {
      setIndex((i) => {
        if (deltaX.current < 0) return (i + 1) % list.length // swipe left -> next
        return (i - 1 + list.length) % list.length // swipe right -> prev
      })
    }
    startX.current = null
    deltaX.current = 0
  }

  if (list.length === 0) {
    return <div className="bg-gray-800 rounded-2xl text-center py-16 text-gray-400">No upcoming demo classes</div>
  }

  return (
    <div ref={hoverRef} className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700" role="region" aria-roledescription="carousel" aria-label="Upcoming demo classes">
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {list.map((d) => (
          <div key={d.id} className="min-w-full grid md:grid-cols-2">
            {/* Banner image */}
            <div className="relative h-64 md:h-full">
              <Image
                src={defaultBanner}
                alt="Demo class banner"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>
            {/* Content */}
            <div className="p-8 md:p-12 bg-gray-800">
              <p className="text-xs font-bold text-indigo-300 tracking-widest">FREE DEMO CLASS</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">{d.name}</h3>
              {d.description && (
                <p className="mt-3 text-gray-300 text-sm md:text-base max-w-prose">{d.description}</p>
              )}
              <div className="mt-4 space-y-1 text-xs md:text-sm text-gray-400">
                <div>Faculty: {d.faculty_name || '-'}</div>
                <div>Date: {d.start_date || '-'}</div>
                <div>Time: {d.timings || '-'}</div>
              </div>
              <div className="mt-6">
                <a href="#request-info" className="inline-flex items-center justify-center rounded-full h-11 px-6 bg-[--primary-color] text-white font-bold hover:bg-indigo-500 transition-colors">Register Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      {list.length > 1 && (
        <div className="absolute bottom-3 right-4 flex gap-2">
          {list.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              className={`h-3 w-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
