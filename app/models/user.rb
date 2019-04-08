class User < ApplicationRecord
  has_one :company
  has_many :tasks
  has_secure_password
  validates :first_name, :last_name, :email, :password, :is_boss, :phone_number, presence: true

  def to_token_payload
    {
      sub: id,
      email: email
    }
  end
end
