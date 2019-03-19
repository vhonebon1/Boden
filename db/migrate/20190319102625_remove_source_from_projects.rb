class RemoveSourceFromProjects < ActiveRecord::Migration[5.1]
  def change
    rename_column :projects, :source, :url
  end
end
