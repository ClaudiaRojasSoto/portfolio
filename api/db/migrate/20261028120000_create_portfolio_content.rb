class CreatePortfolioContent < ActiveRecord::Migration[7.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.string :mark, null: false
      t.string :email, null: false
      t.string :resume_path, null: false
      t.string :linkedin_url, null: false
      t.string :github_url, null: false
      t.string :medium_url, null: false
      t.string :role_label, null: false
      t.string :location_label, null: false
      t.text :hero_summary, null: false
      t.string :availability_label, null: false
      t.string :remote_availability_label, null: false
      t.string :about_caption, null: false
      t.string :about_photo_credit, null: false
      t.text :about_lead, null: false
      t.text :about_body, null: false

      t.timestamps
    end

    create_table :proof_points do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :value, null: false
      t.string :primary_line, null: false
      t.string :secondary_line, null: false
      t.timestamps
    end
    add_index :proof_points, [ :profile_id, :position ], unique: true

    create_table :skills do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :skills, [ :profile_id, :position ], unique: true

    create_table :projects do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :variant, null: false
      t.string :number, null: false
      t.string :eyebrow, null: false
      t.string :title, null: false
      t.text :summary, null: false
      t.string :url, null: false
      t.timestamps
    end
    add_index :projects, [ :profile_id, :position ], unique: true

    create_table :project_tags do |t|
      t.references :project, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :project_tags, [ :project_id, :position ], unique: true

    create_table :about_values do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :number, null: false
      t.string :primary_line, null: false
      t.string :secondary_line, null: false
      t.timestamps
    end
    add_index :about_values, [ :profile_id, :position ], unique: true

    create_table :experiences do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :number, null: false
      t.string :period, null: false
      t.string :role, null: false
      t.string :place, null: false
      t.text :summary, null: false
      t.timestamps
    end
    add_index :experiences, [ :profile_id, :position ], unique: true

    create_table :stack_groups do |t|
      t.references :profile, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :label, null: false
      t.boolean :featured, null: false, default: false
      t.timestamps
    end
    add_index :stack_groups, [ :profile_id, :position ], unique: true

    create_table :stack_items do |t|
      t.references :stack_group, null: false, foreign_key: true
      t.integer :position, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :stack_items, [ :stack_group_id, :position ], unique: true
  end
end
