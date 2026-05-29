import '../index.css';
import './globals.css';

export const metadata = {
  title: 'Luxury Store',
  description: 'Premium luxury e‑commerce experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-bg-light text-foreground antialiased">{children}</body>
    </html>
  );
}
