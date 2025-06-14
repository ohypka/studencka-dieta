// app/layout.js
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'

export const metadata = {
    title: 'Studencka Dieta',
    description: 'Zdrowe nawyki żywieniowe'
}

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <head>
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        </head>
        <body className="bg-gray-50 text-gray-800">
        <Navbar />

        <main className="container mx-auto p-6">{children}</main>

        <footer className="bg-gray-100 text-sm text-gray-600 py-4">
            <p className="text-center">&copy; {new Date().getFullYear()} Studencka Dieta</p>
        </footer>

        <Analytics />
        </body>
        </html>
    )
}
