class Skill < ApplicationRecord
  include Positioned

  belongs_to :profile

  validates :name, presence: true
end
