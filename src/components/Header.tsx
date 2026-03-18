'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '@/content/site'
import publicUrl from '@/lib/publicUrl'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-2 rounded-(--radius-md) focus-visible:outline-offset-4"
          onClick={() => setOpen(false)}
        >
          <Image
            src={publicUrl('/logo-final.svg')}
            alt=""
            width={160}
            height={40}
            className="h-9 w-auto sm:h-10"
            priority
          />
          <span className="text-sm font-bold tracking-tight">
            Onze Bouwgroep
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-(--radius-md) px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:text-brand-red hover:underline decoration-brand-red/80 underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-(--radius-md) bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-brand-red/95 sm:inline-flex"
          >
            Offerte aanvragen
          </Link>
          <button
            type="button"
            className="inline-flex rounded-(--radius-md) p-2.5 text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-black/5 bg-white lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="mx-auto flex max-w-[1320px] flex-col gap-1 px-4 py-4" aria-label="Mobiel menu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-(--radius-md) px-3 py-3 text-base font-medium hover:bg-brand-gray"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 rounded-(--radius-md) bg-brand-red px-4 py-3 text-center font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Offerte aanvragen
          </Link>
        </nav>
      </div>
    </header>
  )
}
