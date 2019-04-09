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
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      company_id: company_id,
      trade_id: trade_id,
      is_boss: is_boss,
    }
  end
end
