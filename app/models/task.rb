class Task < ApplicationRecord
  belongs_to :trades
  belongs_to :users
  validates :invoice, :location, :is_emergency, :priority, :description, :est_time, :num_workers, presence: true
end
