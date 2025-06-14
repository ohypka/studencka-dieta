'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const links = [
        { label: 'Strona główna', href: '/' },
        { label: 'Przepisy', href: '/recipes' },
        { label: 'AI-asystent', href: '/ai-kitchen' },
        { label: 'Kalkulatory', href: '/calculators' },
        { label: 'Edukacja', href: '/education' },
        { label: 'Kontakt', href: '/contact' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-green-600">
                    Studencka&nbsp;Dieta
                </Link>

                {/* Ikona hamburger */}
                <button
                    onClick={() => setOpen(o => !o)}
                    className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                    aria-label="Menu"
                >
                    {open ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>

                {/* Linki */}
                <div className={`flex-col md:flex-row md:flex items-center md:space-x-8 space-y-4 md:space-y-0 absolute md:static bg-white md:bg-transparent left-0 right-0 top-full md:top-auto p-4 md:p-0 transition-all ${open ? 'block' : 'hidden'}`}>
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="block md:inline text-gray-700 font-medium hover:text-green-600 transition"
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
