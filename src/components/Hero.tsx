import type { Profile, ProofPoint } from '../types/portfolio.ts'
import { ArrowRight, DownloadIcon } from './icons.tsx'
import { SafeLink } from './SafeLink.tsx'

type HeroProps = {
  profile: Profile
  proof: ProofPoint[]
}

export function Hero({ profile, proof }: HeroProps) {
  return (
    <section className="portfolio-hero">
      <div className="hero-orbit" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="hero-kicker">
        <span>{profile.role_label}</span>
        <span>{profile.location_label}</span>
      </div>
      <h1>
        I build digital
        <br />
        products that <em>work.</em>
      </h1>
      <div className="hero-lower">
        <p>{profile.hero_summary}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">
            Explore my work <ArrowRight />
          </a>
          <SafeLink className="button-text" href={profile.resume_path} download>
            Download résumé <DownloadIcon />
          </SafeLink>
        </div>
      </div>
      <div className="hero-proof">
        {proof.map((item) => (
          <div key={item.value}>
            <strong>{item.value}</strong>
            <span>
              {item.lines[0]}
              <br />
              {item.lines[1]}
            </span>
          </div>
        ))}
      </div>
      <div className="scroll-note">
        <span /> Scroll to discover
      </div>
    </section>
  )
}
