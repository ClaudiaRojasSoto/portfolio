class AddLinkLabelToProjects < ActiveRecord::Migration[7.2]
  def change
    add_column :projects, :link_label, :string, null: false, default: "View work on GitHub"
  end
end
