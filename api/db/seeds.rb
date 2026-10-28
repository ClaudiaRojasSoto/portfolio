Profile.destroy_all

profile = Profile.create!(
  name: "Claudia Rojas",
  mark: "CR",
  email: "claudiarojassoto@gmail.com",
  resume_path: "/Claudia_Rojas_CV.pdf",
  linkedin_url: "https://www.linkedin.com/in/claudia-rojas-soto/",
  github_url: "https://github.com/ClaudiaRojasSoto",
  medium_url: "https://medium.com/@claudiarojassoto",
  role_label: "Full-stack developer",
  location_label: "Copiapó, Atacama, Chile · Working worldwide",
  hero_summary: "From first idea to production. I turn complex problems into thoughtful, scalable experiences — across the entire stack.",
  availability_label: "Available for select projects",
  remote_availability_label: "Available for remote opportunities",
  about_caption: "Curiosity\nmeets craft.",
  about_photo_credit: "Photo: Mikhail Fesenko / Unsplash",
  about_lead: "My path into tech wasn't linear — and that's exactly my advantage.",
  about_body: "Before software, I spent two decades in education and communication. Today, I bring that experience into every product: asking better questions, making complexity understandable, and building with people — not just requirements — in mind."
)

[
  [ "03+", "Years building", "for the web" ],
  [ "60+", "Projects", "completed" ],
  [ "B2/C1", "English", "proficiency" ]
].each_with_index do |(value, primary_line, secondary_line), position|
  profile.proof_points.create!(value:, primary_line:, secondary_line:, position:)
end

[
  "REACT", "NODE.JS", "TYPESCRIPT", "RUBY ON RAILS", "SQL",
  "SPRING BOOT", "UX THINKING", "REMOTE COLLABORATION"
].each_with_index do |name, position|
  profile.skills.create!(name:, position:)
end

[
  {
    variant: "otto",
    number: "01",
    eyebrow: "Product engineering · 2024—Now",
    title: "OTTO",
    summary: "Building production-ready features across the stack for a US startup, from product decisions to reliable implementation.",
    url: "https://www.opentotheoffer.com/",
    link_label: "Visit the product",
    tags: [ "Ruby on Rails", "Hotwire", "PostgreSQL", "RSpec" ]
  },
  {
    variant: "metricks",
    number: "02",
    eyebrow: "Analytics dashboard · Independent",
    title: "METRICKS",
    summary: "A data-focused dashboard that turns complex metrics into clear, actionable views for faster decision-making.",
    url: "https://github.com/ClaudiaRojasSoto",
    link_label: "View work on GitHub",
    tags: [ "JavaScript", "React", "Data viz", "UX" ]
  },
  {
    variant: "rental",
    number: "03",
    eyebrow: "Full-stack platform · Independent",
    title: "CAR RENTAL",
    summary: "A responsive booking experience designed around simple discovery, confident decisions, and a frictionless rental flow.",
    url: "https://github.com/ClaudiaRojasSoto",
    link_label: "View work on GitHub",
    tags: [ "Full stack", "REST API", "SQL", "Responsive" ]
  }
].each_with_index do |attributes, position|
  tags = attributes.delete(:tags)
  project = profile.projects.create!(attributes.merge(position:))
  tags.each_with_index { |name, tag_position| project.project_tags.create!(name:, position: tag_position) }
end

[
  [ "01", "Clear thinking", "over clever code" ],
  [ "02", "Ownership from", "idea to release" ],
  [ "03", "Remote-first,", "human always" ]
].each_with_index do |(number, primary_line, secondary_line), position|
  profile.about_values.create!(number:, primary_line:, secondary_line:, position:)
end

[
  [ "01", "2024 — Now", "Full Stack Developer · Contractor", "East Rock Software · USA / Remote",
    "Shipping scalable product features for OTTO with a distributed US team, owning work across the complete software lifecycle." ],
  [ "02", "2023 — Now", "Independent Full Stack Developer", "Self-employed · Global / Remote",
    "60+ projects delivered across interfaces, APIs, databases and deployment, with an emphasis on clear collaboration and maintainable systems." ],
  [ "03", "2023 — Now", "Developer Mentor", "Microverse · Volunteer",
    "Helping international developers grow through weekly code reviews, pair programming, career guidance and practical technical support." ]
].each_with_index do |(number, period, role, place, summary), position|
  profile.experiences.create!(number:, period:, role:, place:, summary:, position:)
end

[
  [ "CORE", true, [ "JavaScript", "TypeScript" ] ],
  [ "FRONTEND", false, [ "React", "Vue.js", "Angular", "Tailwind CSS" ] ],
  [ "BACKEND", false, [ "Node.js", "Ruby on Rails", "Spring Boot", "Express" ] ],
  [ "DATA + QUALITY", false, [ "SQL / NoSQL", "Jest / JUnit", "REST APIs", "CI / CD" ] ]
].each_with_index do |(label, featured, items), position|
  group = profile.stack_groups.create!(label:, featured:, position:)
  items.each_with_index { |name, item_position| group.stack_items.create!(name:, position: item_position) }
end
