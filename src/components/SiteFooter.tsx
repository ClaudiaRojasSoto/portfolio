const year = new Date().getFullYear()

type SiteFooterProps = {
  name: string
}

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="portfolio-footer">
      <span>© {year} {name}</span>
      <span>Designed with intention · Built with React</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}
