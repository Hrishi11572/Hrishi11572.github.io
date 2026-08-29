import type { Metadata } from "next";
import "./globals.css";
// KaTeX CSS for math rendering
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "Hrishi's Blog",
  description: "A blog about Neural Networks, Manifolds, and Topology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="colah-navbar border-b border-[#080808]">
          <div className="colah-container flex justify-between items-center h-[50px]">
            <div className="text-white text-lg font-bold">
              <a href="/" className="text-white hover:text-white hover:no-underline">Hrishi's Blog</a>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/">Blog</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-gray-500 mt-12 border-t border-gray-200">
          <div className="colah-container">
            <p>Thoughts and writings.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
