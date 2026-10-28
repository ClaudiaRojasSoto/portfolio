class Experience < ApplicationRecord
  include Positioned

  belongs_to :profile

  validates :number, :period, :role, :place, :summary, presence: true
end
