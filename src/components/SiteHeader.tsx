import { useEffect, useState } from 'react'
import { navigation } from '../content/navigation.ts'
import type { Profile } from '../types/portfolio.ts'
import { LinkedInIcon, MenuIcon } from './icons.tsx'

type SiteHeaderProps = {
  profile: Profile
  activeId: string | null
}

export function SiteHeader({ profile, activeId }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 901px)')
    const onViewportChange = () => {
      if (desktop.matches) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onViewportChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onViewportChange)
    }
  }, [])

  return (
    <header className="portfolio-header">
      <a href="#top" className="portfolio-logo" aria-label={`${profile.name} home`}>
        <span>{profile.mark}</span>
        <b>{profile.name}</b>
      </a>
      <nav className={open ? 'is-open' : undefined} aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'true' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <span className="availability">
          <i /> {profile.availability_label}
        </span>
        <a
          className="mini-social"
          href={profile.linkedin_url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={16} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
