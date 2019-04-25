class DropNullConstraintFromUsersCartId < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cart_id, :integer
    add_column :users, :cart_id, :integer
  end
end
