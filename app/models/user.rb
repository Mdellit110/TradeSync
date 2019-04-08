class User < ApplicationRecord
  belongs_to :company
  belongs_to :trade
  has_many :tasks
  has_secure_password
  validates :first_name, :last_name, :email, :phone_number, presence: true

  def to_token_payload
    {
      sub: id,
      email: email,
    }
  end
end
