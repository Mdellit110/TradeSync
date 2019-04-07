class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_secure_password
  validates :first_name, :last_name, :email, :password_digest, :terms_of_service, :telephone, presence: true
end
