import { Button } from '@/components/ui/button.jsx'

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <nav className="flex items-center gap-8 text-sm">
          <a href="#/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        <Button
          asChild
          className="btn btn-primary"
        >
          <a
            href="mailto:rampurkar.amit@gmail.com?subject=Let%E2%80%99s%20Connect%20%E2%80%93%20Product%20Management%20Opportunities"
          >
            Hire me
          </a>
        </Button>
      </div>
    </header>
  )
}
