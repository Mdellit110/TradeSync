class ChangeActTimeToEndTime < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :act_time, :end_time
    change_column :tasks, :end_time, :string
  end
end
