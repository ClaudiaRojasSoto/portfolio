class ProjectTag < ApplicationRecord
  include Positioned

  belongs_to :project

  validates :name, presence: true
end
