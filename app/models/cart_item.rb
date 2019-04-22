# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint(8)        not null, primary key
#  quantity   :integer          not null
#  product_id :integer          not null
#  cart_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :product
    belongs_to :cart,
        class_name: "Cart",
        primary_key: :id,
        foreign_key: :cart_id
    
    has_one :merchant,
        through: :product,
        source: :merchant
end
