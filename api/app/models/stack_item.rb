class StackItem < ApplicationRecord
  include Positioned

  belongs_to :stack_group

  validates :name, presence: true
end
