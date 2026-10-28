import type { Experience as ExperienceItem, Profile } from '../types/portfolio.ts'
import { DownloadIcon } from './icons.tsx'
import { linkOpenProps } from '../lib/safeUrl.ts'
import { SafeLink } from './SafeLink.tsx'

type ExperienceProps = {
  profile: Profile
  items: ExperienceItem[]
}

export function Experience({ profile, items }: ExperienceProps) {
  return (
    <section className="experience-section" id="experience">
      <div className="section-intro compact">
        <div>
          <span className="section-index">03 / Experience</span>
          <h2>
            Where I&apos;ve
            <br />
            <em>made an impact.</em>
          </h2>
        </div>
        <SafeLink className="button-text" href={profile.resume_path} {...linkOpenProps(profile.resume_path)}>
          Full résumé <DownloadIcon />
        </SafeLink>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article key={item.number}>
            <span>{item.period}</span>
            <i>{item.number}</i>
            <div>
              <h3>{item.role}</h3>
              <b>{item.place}</b>
            </div>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
