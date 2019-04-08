class AddTradeToTasks < ActiveRecord::Migration[5.2]
  def change
    add_reference :tasks, :trade, foreign_key: { to_table: :trades}
  end
end
