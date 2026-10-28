import type { AboutValue, Profile } from '../types/portfolio.ts'

type AboutProps = {
  profile: Profile
  values: AboutValue[]
}

export function About({ profile, values }: AboutProps) {
  const captionLines = profile.about_caption.split('\n').filter((line) => line.length > 0)

  return (
    <section className="about-section" id="about">
      <div className="about-image" role="img" aria-label="Developer working at a desk">
        <span>
          {captionLines.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
        <small>{profile.about_photo_credit}</small>
      </div>
      <div className="about-copy">
        <span className="section-index">02 / Beyond the code</span>
        <h2>
          Developer.
          <br />
          Mentor.
          <br />
          <em>Communicator.</em>
        </h2>
        <p className="lead">{profile.about_lead}</p>
        <p>{profile.about_body}</p>
        <div className="about-values">
          {values.map((value) => (
            <div key={value.number}>
              <b>{value.number}</b>
              <span>
                {value.lines[0]}
                <br />
                {value.lines[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
