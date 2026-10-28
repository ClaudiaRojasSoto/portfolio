import type { StackGroup } from '../types/portfolio.ts'

type ToolboxProps = {
  groups: StackGroup[]
}

export function Toolbox({ groups }: ToolboxProps) {
  return (
    <section className="stack-section">
      <span className="section-index">04 / Toolbox</span>
      <div className="stack-heading">
        <h2>
          Technology is the tool.
          <br />
          <em>Problem-solving is the skill.</em>
        </h2>
        <p>I choose tools for the problem, not the other way around.</p>
      </div>
      <div className="stack-grid">
        {groups.map((group) =>
          group.featured ? (
            <article key={group.label} className="stack-main">
              <span>{group.label}</span>
              <strong>
                {group.items.map((item, index) => (
                  <span key={item}>
                    {index > 0 && <br />}
                    {item}
                  </span>
                ))}
              </strong>
              <div className="code-lines" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </article>
          ) : (
            <article key={group.label}>
              <span>{group.label}</span>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ),
        )}
      </div>
    </section>
  )
}
