class DropIngredientsTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :ingredients
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
