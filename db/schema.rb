# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_07_144837) do

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "invoice"
    t.string "location"
    t.boolean "is_emergency"
    t.integer "priority"
    t.text "description"
    t.integer "est_time"
    t.integer "act_time"
    t.integer "num_workers"
    t.time "start_time"
    t.boolean "is_complete"
    t.boolean "in_review"
    t.datetime "created_at", null: false
    t.datetiime "updated_at", null: false
  end

  create_table "trades", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_boss"
  end

end
