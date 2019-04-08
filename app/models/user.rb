class User < ApplicationRecord
  has_one :company
  has_many :tasks
  has_secure_password
  validates :first_name, :last_name, :email, :password_digest, :phone_number, presence: true
end
