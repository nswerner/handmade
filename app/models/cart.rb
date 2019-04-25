# == Schema Information
#
# Table name: carts
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Cart < ApplicationRecord
    
    belongs_to :user
    
    has_many :cart_items,
        class_name: "CartItem",
        primary_key: :id,
        foreign_key: :cart_id

    has_many :products,
        through: :cart_items,
        source: :product

end
