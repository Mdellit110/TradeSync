class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :invoice
      t.string :location
      t.boolean :is_emergency
      t.integer :priority
      t.text :description
      t.integer :est_time
      t.integer :act_time
      t.integer :num_workers
      t.time :start_time
      t.boolean :is_complete
      t.boolean :in_review

      t.timestamps
    end
  end
end
