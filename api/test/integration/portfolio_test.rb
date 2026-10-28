require "test_helper"

class PortfolioTest < ActionDispatch::IntegrationTest
  test "returns the portfolio stored in postgres" do
    profile = Profile.create!(
      name: "Claudia Rojas",
      mark: "CR",
      email: "claudiarojassoto@gmail.com",
      resume_path: "/Claudia_Rojas_CV.pdf",
      linkedin_url: "https://www.linkedin.com/in/claudia-rojas-soto/",
      github_url: "https://github.com/ClaudiaRojasSoto",
      medium_url: "https://medium.com/@claudiarojassoto",
      role_label: "Full-stack developer",
      location_label: "Santiago, CL",
      hero_summary: "From first idea to production.",
      availability_label: "Available for select projects",
      remote_availability_label: "Available for remote opportunities",
      about_caption: "Curiosity\nmeets craft.",
      about_photo_credit: "Photo credit",
      about_lead: "A non-linear path.",
      about_body: "Two decades before software."
    )
    profile.skills.create!(name: "REACT", position: 0)
    project = profile.projects.create!(
      variant: "otto",
      number: "01",
      eyebrow: "Product engineering",
      title: "OTTO",
      summary: "Production features for a US startup.",
      url: profile.github_url,
      position: 0
    )
    project.project_tags.create!(name: "React", position: 0)
    profile.experiences.create!(
      number: "01",
      period: "2024 — Now",
      role: "Full Stack Developer · Contractor",
      place: "East Rock Software · USA / Remote",
      summary: "Shipping features with a distributed team.",
      position: 0
    )

    get api_v1_portfolio_path

    assert_response :success
    body = JSON.parse(response.body)
    assert_equal "claudiarojassoto@gmail.com", body.dig("profile", "email")
    assert_equal "REACT", body.dig("skills", 0)
    assert_equal "OTTO", body.dig("projects", 0, "title")
    assert_equal [ "React" ], body.dig("projects", 0, "tags")
    assert_equal "East Rock Software · USA / Remote", body.dig("experience", 0, "place")
  end

  test "returns not found when postgres has no portfolio" do
    get api_v1_portfolio_path

    assert_response :not_found
    assert_equal "Portfolio is not available", JSON.parse(response.body)["error"]
  end
end
