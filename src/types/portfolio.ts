import { z } from 'zod'

const linePairSchema = z.object({
  lines: z.array(z.string()),
})

export const projectVariantSchema = z.enum(['otto', 'metricks', 'rental'])

export const portfolioSchema = z.object({
  profile: z.object({
    name: z.string(),
    mark: z.string(),
    email: z.string(),
    resume_path: z.string(),
    linkedin_url: z.string(),
    github_url: z.string(),
    medium_url: z.string(),
    role_label: z.string(),
    location_label: z.string(),
    hero_summary: z.string(),
    availability_label: z.string(),
    remote_availability_label: z.string(),
    about_caption: z.string(),
    about_photo_credit: z.string(),
    about_lead: z.string(),
    about_body: z.string(),
  }),
  proof: z.array(linePairSchema.extend({ value: z.string() })),
  skills: z.array(z.string()),
  projects: z.array(
    z.object({
      variant: projectVariantSchema,
      number: z.string(),
      eyebrow: z.string(),
      title: z.string(),
      summary: z.string(),
      url: z.string(),
      link_label: z.string(),
      tags: z.array(z.string()),
    }),
  ),
  about_values: z.array(linePairSchema.extend({ number: z.string() })),
  experience: z.array(
    z.object({
      number: z.string(),
      period: z.string(),
      role: z.string(),
      place: z.string(),
      summary: z.string(),
    }),
  ),
  toolbox: z.array(
    z.object({
      label: z.string(),
      featured: z.boolean(),
      items: z.array(z.string()),
    }),
  ),
})

export type Portfolio = z.infer<typeof portfolioSchema>
export type Profile = Portfolio['profile']
export type ProofPoint = Portfolio['proof'][number]
export type ProjectVariant = z.infer<typeof projectVariantSchema>
export type Project = Portfolio['projects'][number]
export type AboutValue = Portfolio['about_values'][number]
export type Experience = Portfolio['experience'][number]
export type StackGroup = Portfolio['toolbox'][number]
