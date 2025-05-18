// app/layout.js
import './globals.css'
import Script from 'next/script'

export const metadata = {
    title: 'Studencka Dieta',
    description: 'Zdrowe nawyki żywieniowe'
}

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <head>
            {/* Tailwind CSS via CDN */}
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        </head>
        <body className="bg-gray-50 text-gray-800">
        <header className="sticky top-0 bg-white backdrop-blur-md z-50">
            <nav className="container mx-auto flex justify-center space-x-12 py-4">
                <a href="/" className="text-gray-800 hover:text-green-600 transition">Home</a>
                <a href="/recipes" className="text-gray-800 hover:text-green-600 transition">Przepisy</a>
                <a href="/ai-kitchen" className="text-gray-800 hover:text-green-600 transition">Co ugotować?</a>
                <a href="/calculators" className="text-gray-800 hover:text-green-600 transition">Kalkulatory</a>
                <a href="/education" className="text-gray-800 hover:text-green-600 transition">Edukacja</a>
                <a href="/contact" className="text-gray-800 hover:text-green-600 transition">Kontakt</a>
            </nav>
        </header>
        <main className="container mx-auto p-6">
            {children}
        </main>
        <footer className="bg-gray-100 text-sm text-gray-600 py-8">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                    <h4 className="font-semibold mb-2">O nas</h4>
                    <ul>
                        <li><a className="hover:underline">Misja</a></li>
                        <li><a className="hover:underline">Zespół</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Funkcje</h4>
                    <ul>
                        <li><a className="hover:underline">AI-asystent</a></li>
                        <li><a className="hover:underline">Kalkulatory</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Wsparcie</h4>
                    <ul>
                        <li><a className="hover:underline">FAQ</a></li>
                        <li><a className="hover:underline">Kontakt</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Społeczność</h4>
                    <ul>
                        <li><a className="hover:underline">Facebook</a></li>
                        <li><a className="hover:underline">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center mt-8">&copy; {new Date().getFullYear()} Studencka Dieta</p>
        </footer>
        </body>
        </html>
    )
}
