import type { ReactNode } from 'react'
import { isSafeUrl } from '../lib/safeUrl.ts'

type SafeLinkProps = {
  href: string
  className?: string
  children: ReactNode
  external?: boolean
  download?: boolean
  ariaLabel?: string
}

export function SafeLink({
  href,
  className,
  children,
  external = false,
  download = false,
  ariaLabel,
}: SafeLinkProps) {
  if (!isSafeUrl(href)) return <span className={className}>{children}</span>

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
    >
      {children}
    </a>
  )
}
