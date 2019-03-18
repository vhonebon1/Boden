class RenameprojectsTable < ActiveRecord::Migration[5.1]
  def self.up
    rename_table :projects, :projects
  end

  def self.down
    rename_table :projects, :projects
  end
end
