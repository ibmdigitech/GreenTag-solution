"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 bg-bg-dark bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          LuxuryShop
        </Link>
        <nav className="flex space-x-6">
          <Link href="/catalog" className="text-sm text-white hover:text-primary transition-colors">
            Catalog
          </Link>
          <Link href="/account" className="text-sm text-white hover:text-primary transition-colors">
            Account
          </Link>
            <button
              onClick={() => router.push('/cart')}
              className="relative text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="View cart"
              title="Cart"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1 5h12" />
            </svg>
            {/* badge placeholder */}
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-bg-dark bg-primary rounded-full">
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
