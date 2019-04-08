class AddIsBossToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_boss, :boolean
  end
end
