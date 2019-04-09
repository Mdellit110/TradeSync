class Task < ApplicationRecord
  belongs_to :trade
  belongs_to :user, optional: true
  validates :invoice, :location, :priority, :description, :est_time, :num_workers, presence: true
end
