class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body
      t.integer :rating, null: false, inclusion: [1, 2, 3]
      t.integer :product_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :reviews, :product_id
    add_index :reviews, :user_id
    add_index :reviews, [:product_id, :user_id], unique: true
  end
end
