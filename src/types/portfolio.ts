export type Portfolio = {
  profile: Profile
  proof: ProofPoint[]
  skills: string[]
  projects: Project[]
  about_values: AboutValue[]
  experience: Experience[]
  toolbox: StackGroup[]
}

export type Profile = {
  name: string
  mark: string
  email: string
  resume_path: string
  linkedin_url: string
  github_url: string
  medium_url: string
  role_label: string
  location_label: string
  hero_summary: string
  availability_label: string
  remote_availability_label: string
  about_caption: string
  about_photo_credit: string
  about_lead: string
  about_body: string
}

export type ProofPoint = {
  value: string
  lines: string[]
}

export type Project = {
  variant: 'otto' | 'metricks' | 'rental' | string
  number: string
  eyebrow: string
  title: string
  summary: string
  url: string
  tags: string[]
}

export type AboutValue = {
  number: string
  lines: string[]
}

export type Experience = {
  number: string
  period: string
  role: string
  place: string
  summary: string
}

export type StackGroup = {
  label: string
  featured: boolean
  items: string[]
}
