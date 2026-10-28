class ProofPoint < ApplicationRecord
  include Positioned

  belongs_to :profile

  validates :value, :primary_line, :secondary_line, presence: true
end
