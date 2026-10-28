import type { Project } from '../types/portfolio.ts'
import { ArrowRight } from './icons.tsx'

const metricBars = [42, 64, 51, 82, 67, 93, 74, 98]

type SelectedWorkProps = {
  projects: Project[]
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <section className="work-section" id="work">
      <div className="section-intro">
        <div>
          <span className="section-index">01 / Selected work</span>
          <h2>
            Built with intent.
            <br />
            <em>Made to deliver.</em>
          </h2>
        </div>
        <p>
          A selection of products and platforms where engineering choices serve real people, clear
          goals, and measurable outcomes.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.number} className={`project ${project.variant}`}>
            <ProjectVisual project={project} />
            <div className="project-copy">
              <span>{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={project.url} target="_blank" rel="noreferrer noopener">
                {project.link_label} <ArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.variant === 'otto') return <OttoVisual number={project.number} />
  if (project.variant === 'metricks') return <MetricksVisual number={project.number} />
  if (project.variant === 'rental') return <RentalVisual number={project.number} />

  return (
    <div className="project-visual">
      <span className="project-number">{project.number}</span>
    </div>
  )
}

function OttoVisual({ number }: { number: string }) {
  return (
    <div className="project-visual">
      <div className="otto-ui">
        <div className="otto-logo">O.</div>
        <p>
          Open to the
          <br />
          <strong>right offer.</strong>
        </p>
        <div className="offer-row">
          <span>Product design</span>
          <b>92%</b>
        </div>
        <div className="offer-row">
          <span>Engineering</span>
          <b>88%</b>
        </div>
      </div>
      <span className="project-number">{number}</span>
    </div>
  )
}

function MetricksVisual({ number }: { number: string }) {
  return (
    <div className="project-visual">
      <div className="metrics-ui">
        <div className="metrics-head">
          <span>Performance</span>
          <b>+24.8%</b>
        </div>
        <div className="bars">
          {metricBars.map((height) => (
            <i key={height} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="metrics-axis">
          <span>MON</span>
          <span>SUN</span>
        </div>
      </div>
      <span className="project-number">{number}</span>
    </div>
  )
}

function RentalVisual({ number }: { number: string }) {
  return (
    <div className="project-visual">
      <div className="rental-ui">
        <span className="rental-label">READY WHEN YOU ARE</span>
        <div className="car-shape">
          <b />
          <b />
        </div>
        <div className="rental-bottom">
          <strong>Find your drive.</strong>
          <span>01 / 04</span>
        </div>
      </div>
      <span className="project-number">{number}</span>
    </div>
  )
}
