type PortfolioStatusProps = {
  status: 'loading' | 'error'
  onRetry: () => void
}

export function PortfolioStatus({ status, onRetry }: PortfolioStatusProps) {
  return (
    <div className="portfolio-shell">
      <div className="status-screen">
        <span className="status-mark">CR</span>
        {status === 'loading' ? (
          <p>Loading the portfolio</p>
        ) : (
          <>
            <p>The portfolio could not be loaded from the database.</p>
            <button type="button" className="button-primary" onClick={onRetry}>
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  )
}
