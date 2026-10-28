import type { Profile } from '../types/portfolio.ts'
import { ArrowRight, GitHubIcon, LinkedInIcon } from './icons.tsx'
import { SafeLink } from './SafeLink.tsx'

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
      <SafeLink href={`mailto:${profile.email}`} className="contact-link">
        {profile.email} <ArrowRight size={28} />
      </SafeLink>
      <div className="contact-meta">
        <span>
          <i /> {profile.remote_availability_label}
        </span>
        <div>
          <SafeLink href={profile.github_url} external>
            <GitHubIcon /> GitHub
          </SafeLink>
          <SafeLink href={profile.linkedin_url} external>
            <LinkedInIcon /> LinkedIn
          </SafeLink>
          <SafeLink href={profile.medium_url} external>
            Medium ↗
          </SafeLink>
        </div>
      </div>
    </section>
  )
}
