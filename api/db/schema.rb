# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2026_10_28_120000) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "about_values", force: :cascade do |t|
    t.bigint "profile_id", null: false
    t.integer "position", null: false
    t.string "number", null: false
    t.string "primary_line", null: false
    t.string "secondary_line", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id", "position"], name: "index_about_values_on_profile_id_and_position", unique: true
    t.index ["profile_id"], name: "index_about_values_on_profile_id"
  end

  create_table "experiences", force: :cascade do |t|
    t.bigint "profile_id", null: false
    t.integer "position", null: false
    t.string "number", null: false
    t.string "period", null: false
    t.string "role", null: false
    t.string "place", null: false
    t.text "summary", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id", "position"], name: "index_experiences_on_profile_id_and_position", unique: true
    t.index ["profile_id"], name: "index_experiences_on_profile_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name", null: false
    t.string "mark", null: false
    t.string "email", null: false
    t.string "resume_path", null: false
    t.string "linkedin_url", null: false
    t.string "github_url", null: false
    t.string "medium_url", null: false
    t.string "role_label", null: false
    t.string "location_label", null: false
    t.text "hero_summary", null: false
    t.string "availability_label", null: false
    t.string "remote_availability_label", null: false
    t.string "about_caption", null: false
    t.string "about_photo_credit", null: false
    t.text "about_lead", null: false
    t.text "about_body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_tags", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.integer "position", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id", "position"], name: "index_project_tags_on_project_id_and_position", unique: true
    t.index ["project_id"], name: "index_project_tags_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.bigint "profile_id", null: false
    t.integer "position", null: false
    t.string "variant", null: false
    t.string "number", null: false
    t.string "eyebrow", null: false
    t.string "title", null: false
    t.text "summary", null: false
    t.string "url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id", "position"], name: "index_projects_on_profile_id_and_position", unique: true
    t.index ["profile_id"], name: "index_projects_on_profile_id"
  end

  create_table "proof_points", force: :cascade do |t|
    t.bigint "profile_id", null: false
    t.integer "position", null: false
    t.string "value", null: false
    t.string "primary_line", null: false
    t.string "secondary_line", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id", "position"], name: "index_proof_points_on_profile_id_and_position", unique: true
    t.index ["profile_id"], name: "index_proof_points_on_profile_id"
  end

  create_table "skills", force: :cascade do |t|
    t.bigint "profile_id", null: false
    t.integer "position", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id", "position"], name: "index_skills_on_profile_id_and_position", unique: true
    t.index ["profile_id"], name: "index_skills_on_profile_id"
  end

  create_table "stack_groups", force: :cascade do |t|
    t.bigint "profile_id", null: false
    t.integer "position", null: false
    t.string "label", null: false
    t.boolean "featured", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id", "position"], name: "index_stack_groups_on_profile_id_and_position", unique: true
    t.index ["profile_id"], name: "index_stack_groups_on_profile_id"
  end

  create_table "stack_items", force: :cascade do |t|
    t.bigint "stack_group_id", null: false
    t.integer "position", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stack_group_id", "position"], name: "index_stack_items_on_stack_group_id_and_position", unique: true
    t.index ["stack_group_id"], name: "index_stack_items_on_stack_group_id"
  end

  add_foreign_key "about_values", "profiles"
  add_foreign_key "experiences", "profiles"
  add_foreign_key "project_tags", "projects"
  add_foreign_key "projects", "profiles"
  add_foreign_key "proof_points", "profiles"
  add_foreign_key "skills", "profiles"
  add_foreign_key "stack_groups", "profiles"
  add_foreign_key "stack_items", "stack_groups"
end
