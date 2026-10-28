class Project < ApplicationRecord
  include Positioned

  VARIANTS = %w[otto metricks rental].freeze

  belongs_to :profile
  has_many :project_tags, -> { order(:position) }, dependent: :destroy

  validates :variant, inclusion: { in: VARIANTS }
  validates :number, :eyebrow, :title, :summary, :url, presence: true
end
