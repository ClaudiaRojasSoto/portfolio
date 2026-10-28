class StackGroup < ApplicationRecord
  include Positioned

  belongs_to :profile
  has_many :stack_items, -> { order(:position) }, dependent: :destroy

  validates :label, presence: true
  validates :featured, inclusion: { in: [ true, false ] }
end
