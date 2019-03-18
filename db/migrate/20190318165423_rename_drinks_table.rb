class RenameDrinksTable < ActiveRecord::Migration[5.1]
  def self.up
    rename_table :drinks, :projects
  end

  def self.down
    rename_table :projects, :drinks
  end
end
