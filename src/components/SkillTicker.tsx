type SkillTickerProps = {
  skills: string[]
}

export function SkillTicker({ skills }: SkillTickerProps) {
  const loop = [...skills, ...skills]

  return (
    <div className="ticker" aria-label="Technical skills">
      <div aria-hidden="true">
        {loop.map((skill, index) => (
          <span key={`${skill}-${index}`}>
            {skill}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
