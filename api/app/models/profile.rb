class Profile < ApplicationRecord
  has_many :proof_points, -> { order(:position) }, dependent: :destroy
  has_many :skills, -> { order(:position) }, dependent: :destroy
  has_many :projects, -> { order(:position) }, dependent: :destroy
  has_many :about_values, -> { order(:position) }, dependent: :destroy
  has_many :experiences, -> { order(:position) }, dependent: :destroy
  has_many :stack_groups, -> { order(:position) }, dependent: :destroy

  validates :name, :mark, :email, :resume_path, :linkedin_url, :github_url, :medium_url,
    :role_label, :location_label, :hero_summary, :availability_label,
    :remote_availability_label, :about_caption, :about_photo_credit, :about_lead, :about_body,
    presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
