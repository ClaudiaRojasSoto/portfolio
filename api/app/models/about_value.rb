class AboutValue < ApplicationRecord
  include Positioned

  belongs_to :profile

  validates :number, :primary_line, :secondary_line, presence: true
end
