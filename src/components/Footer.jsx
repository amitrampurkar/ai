export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Amit Rampurkar. All rights reserved.
        </p>
        <p className="text-center sm:text-right">
          Website design vibe-coded with Manus + ChatGPT
        </p>
      </div>
    </footer>
  )
}
