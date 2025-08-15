import './globals.css'; import Link from 'next/link';
export default function RootLayout({children}:{children:React.ReactNode}){
  return(<html lang="en"><body>
    <header className="border-b border-white/5"><div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-3">
      <Link href="/" className="no-underline text-lg font-semibold">AR · Foundational LLM PM</Link>
      <nav className="flex flex-wrap gap-5 text-sm"><Link href="/projects">Projects</Link><Link href="/resources">Resources</Link><Link href="/resume">Resume</Link><Link href="/about">About</Link><Link href="/contact" className="btn">Hire me</Link></nav>
    </div></header>
    <main className="container py-10">{children}</main>
    <footer className="border-t border-white/5 mt-20"><div className="container py-8 text-sm text-muted">© {new Date().getFullYear()} Amit Rampurkar · <a href="/privacy">Privacy</a></div></footer>
  </body></html>);
}
