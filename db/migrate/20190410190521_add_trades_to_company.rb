class AddTradesToCompany < ActiveRecord::Migration[5.2]
  def change
    add_reference :trades, :company, foreign_key: { to_table: :companies}
  end
end
