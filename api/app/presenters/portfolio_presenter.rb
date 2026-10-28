class PortfolioPresenter
  def initialize(profile)
    @profile = profile
  end

  def as_json(*)
    {
      profile: profile_json,
      proof: ordered(@profile.proof_points).map { |point| line_pair(point) },
      skills: ordered(@profile.skills).map(&:name),
      projects: ordered(@profile.projects).map { |project| project_json(project) },
      about_values: ordered(@profile.about_values).map { |value| line_pair(value) },
      experience: ordered(@profile.experiences).map { |experience| experience_json(experience) },
      toolbox: ordered(@profile.stack_groups).map { |group| group_json(group) }
    }
  end

  private

  def profile_json
    {
      name: @profile.name,
      mark: @profile.mark,
      email: @profile.email,
      resume_path: @profile.resume_path,
      linkedin_url: @profile.linkedin_url,
      github_url: @profile.github_url,
      medium_url: @profile.medium_url,
      role_label: @profile.role_label,
      location_label: @profile.location_label,
      hero_summary: @profile.hero_summary,
      availability_label: @profile.availability_label,
      remote_availability_label: @profile.remote_availability_label,
      about_caption: @profile.about_caption,
      about_photo_credit: @profile.about_photo_credit,
      about_lead: @profile.about_lead,
      about_body: @profile.about_body
    }
  end

  def project_json(project)
    {
      variant: project.variant,
      number: project.number,
      eyebrow: project.eyebrow,
      title: project.title,
      summary: project.summary,
      url: project.url,
      tags: ordered(project.project_tags).map(&:name)
    }
  end

  def experience_json(experience)
    {
      number: experience.number,
      period: experience.period,
      role: experience.role,
      place: experience.place,
      summary: experience.summary
    }
  end

  def group_json(group)
    {
      label: group.label,
      featured: group.featured,
      items: ordered(group.stack_items).map(&:name)
    }
  end

  def line_pair(record)
    {
      value: record.try(:value),
      number: record.try(:number),
      lines: [ record.primary_line, record.secondary_line ]
    }.compact
  end

  def ordered(records)
    records.sort_by(&:position)
  end
end
