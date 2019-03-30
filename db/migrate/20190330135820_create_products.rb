class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.integer :merchant_id, null: false

      t.timestamps
    end
    
    add_index :products, :title
    add_index :products, :merchant_id
    add_index :products, [:title, :merchant_id], unique: true
    add_index :products, [:title, :description], unique: true
  end
end
