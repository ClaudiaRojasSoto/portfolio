import type { Project, ProjectVariant } from '../types/portfolio.ts'
import { ArrowRight } from './icons.tsx'
import { SafeLink } from './SafeLink.tsx'

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
              <SafeLink href={project.url} external>
                {project.link_label} <ArrowRight />
              </SafeLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const projectVisuals: Record<ProjectVariant, typeof OttoVisual> = {
  otto: OttoVisual,
  metricks: MetricksVisual,
  rental: RentalVisual,
}

function ProjectVisual({ project }: { project: Project }) {
  const Visual = projectVisuals[project.variant]

  if (!Visual) {
    return (
      <div className="project-visual">
        <span className="project-number">{project.number}</span>
      </div>
    )
  }

  return <Visual number={project.number} />
}

function OttoVisual({ number }: { number: string }) {
  return (
    <div className="project-visual">
      <img
        className="otto-shot"
        src="/otto-product.jpg"
        alt="OTTO property listing with personal details blurred"
      />
      <span className="project-number">{number}</span>
    </div>
  )
}

function MetricksVisual({ number }: { number: string }) {
  return (
    <div className="project-visual">
      <img
        className="metricks-shot"
        src="/metricks-tracker.jpg"
        alt="World population map in the Metricks tracker"
      />
      <span className="project-number">{number}</span>
    </div>
  )
}

function RentalVisual({ number }: { number: string }) {
  return (
    <div className="project-visual">
      <img
        className="rental-shot"
        src="/car-rental.jpg"
        alt="Car rental welcome screen"
      />
      <span className="project-number">{number}</span>
    </div>
  )
}
