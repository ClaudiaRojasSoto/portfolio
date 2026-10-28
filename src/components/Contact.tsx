import type { Profile } from '../types/portfolio.ts'
import { ArrowRight, GitHubIcon, LinkedInIcon } from './icons.tsx'

type ContactProps = {
  profile: Profile
}

export function Contact({ profile }: ContactProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-spark" aria-hidden="true">
        ✦
      </div>
      <span className="section-index">05 / Let&apos;s build</span>
      <h2>
        Have a challenge
        <br />
        worth solving?
      </h2>
      <p>
        I&apos;m always open to thoughtful products, ambitious teams, and conversations that could
        lead somewhere interesting.
      </p>
      <a href={`mailto:${profile.email}`} className="contact-link">
        {profile.email} <ArrowRight size={28} />
      </a>
      <div className="contact-meta">
        <span>
          <i /> {profile.remote_availability_label}
        </span>
        <div>
          <a href={profile.github_url} target="_blank" rel="noreferrer noopener">
            <GitHubIcon /> GitHub
          </a>
          <a href={profile.linkedin_url} target="_blank" rel="noreferrer noopener">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={profile.medium_url} target="_blank" rel="noreferrer noopener">
            Medium ↗
          </a>
        </div>
      </div>
    </section>
  )
}
