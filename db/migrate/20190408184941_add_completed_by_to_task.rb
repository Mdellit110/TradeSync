class AddCompletedByToTask < ActiveRecord::Migration[5.2]
  def change
    add_reference :tasks, :completed_by, nullable: true, foreign_key: { to_table: :users}
    # add_foreign_key :tasks, :users, column: :completed_by
  end
end
