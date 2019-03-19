class RemoveColumnsFromProjects < ActiveRecord::Migration[5.1]
  def up
    remove_column :projects, :steps
  end

  def down
    add_column :projects, :steps, :string
  end
end
