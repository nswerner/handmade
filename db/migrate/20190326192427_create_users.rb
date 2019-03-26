class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :cart_id, null: false
      t.string :shop_name
      t.text :image_url
      t.string :gender
      t.string :location
      t.date :birthday
      t.text :about
      t.string :favorite_material

      t.timestamps
    end
  
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :cart_id, unique: true
    add_index :users, :shop_name, unique: true
  end
end