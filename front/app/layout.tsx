import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">WHOIS</span>
        </Link>

        <div className="space-x-3">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-6 text-center text-sm text-gray-500">
      &copy; 2025 Enol Footer. All rights reserved.
    </footer>
  );
}
