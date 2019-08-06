class DropActiveAdminTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :admin_users
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
