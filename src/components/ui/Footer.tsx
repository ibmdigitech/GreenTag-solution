import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary">LuxuryShop</h3>
          <p className="text-sm">Premium curated products for discerning customers.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/catalog" className="hover:text-primary transition-colors">Catalog</Link></li>
            <li><Link href="/account" className="hover:text-primary transition-colors">Account</Link></li>
          </ul>
        </div>
        <div className="text-right md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} LuxuryShop. All rights reserved.</p>
          <p className="text-xs mt-2">Designed with premium aesthetics.</p>
        </div>
      </div>
    </footer>
  );
}
