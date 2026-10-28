import { About } from './components/About.tsx'
import { Contact } from './components/Contact.tsx'
import { Experience } from './components/Experience.tsx'
import { Hero } from './components/Hero.tsx'
import { PortfolioStatus } from './components/PortfolioStatus.tsx'
import { SelectedWork } from './components/SelectedWork.tsx'
import { SiteFooter } from './components/SiteFooter.tsx'
import { SiteHeader } from './components/SiteHeader.tsx'
import { SkillTicker } from './components/SkillTicker.tsx'
import { Toolbox } from './components/Toolbox.tsx'
import { sectionIds } from './content/navigation.ts'
import { useActiveSection } from './hooks/useActiveSection.ts'
import { usePortfolio } from './hooks/usePortfolio.ts'

export default function App() {
  const portfolio = usePortfolio()
  const activeId = useActiveSection(sectionIds, portfolio.status === 'ready')

  if (portfolio.status !== 'ready') {
    return <PortfolioStatus status={portfolio.status} onRetry={portfolio.reload} />
  }

  const { data } = portfolio

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <SiteHeader profile={data.profile} activeId={activeId} />
      <main id="top">
        <Hero profile={data.profile} proof={data.proof} />
        <SkillTicker skills={data.skills} />
        <SelectedWork projects={data.projects} />
        <About profile={data.profile} values={data.about_values} />
        <Experience profile={data.profile} items={data.experience} />
        <Toolbox groups={data.toolbox} />
        <Contact profile={data.profile} />
      </main>
      <SiteFooter name={data.profile.name} />
    </div>
  )
}
