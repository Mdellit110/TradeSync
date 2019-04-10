class RemoveCompletedByIdFromTasks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :completed_by_id, :bigint
  end
end
