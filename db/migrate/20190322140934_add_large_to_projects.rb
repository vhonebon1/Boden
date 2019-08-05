class AddLargeToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :large, :boolean
  end
end
