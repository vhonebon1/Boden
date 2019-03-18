class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.references :project, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
