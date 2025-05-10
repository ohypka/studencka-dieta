// app/layout.js
import './globals.css'
import Script from 'next/script'

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
        <head>
            {/* Tailwind CDN */}
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive"/>
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
                rel="stylesheet"
            />
            <style>{`
    body { font-family: 'Poppins', sans-serif; }
  `}</style>
        </head>

        <body className="bg-gray-50 text-gray-800">
        <header className="bg-green-500 text-white p-4">
            <nav className="container mx-auto flex space-x-6">
                <a href="/" className="hover:underline">Home</a>
                <a href="/recipes" className="hover:underline">Przepisy</a>
                <a href="/ai-kitchen" className="hover:underline">Co ugotować?</a>
                <a href="/calculators" className="hover:underline">Kalkulatory</a>
                <a href="/education" className="hover:underline">Edukacja</a>
                <a href="/contact" className="hover:underline">Kontakt</a>
            </nav>
        </header>
        <main className="container mx-auto p-6">
            {children}
        </main>
        <footer className="bg-gray-200 text-center p-4 mt-12">
            © {new Date().getFullYear()} Studencka Dieta
        </footer>
        </body>
        </html>
    )
}
