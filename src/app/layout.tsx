import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Printed Packaging Solutions",
  description: "High-quality customized packaging solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-blue-600">
                  PackPro
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Products
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PackPro</h3>
                <p className="text-gray-400">
                  Your trusted partner for custom printed packaging solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Email: contact@example.com<br />
                  Phone: +353 89 446 2019<br />
                  Hours: Mon-Fri 8:00-16:00
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Get Quote</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} PackPro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
