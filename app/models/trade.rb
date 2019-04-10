class Trade < ApplicationRecord
  has_many :tasks
  has_many :users
  belongs_to :company
end
