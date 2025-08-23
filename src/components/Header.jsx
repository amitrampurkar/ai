import { Button } from '@/components/ui/button.jsx'

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <nav className="flex items-center gap-8 text-sm">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        <Button className="btn btn-primary">
          Hire me
        </Button>
      </div>
    </header>
  )
}

