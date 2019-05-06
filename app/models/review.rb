# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  body       :text
#  rating     :integer          not null
#  product_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :rating, :user_id, :product_id, presence: true
    validates :user_id, uniqueness: { scope: :product_id }
    validates :rating, inclusion: { in: [0, 1, 2, 3, 4, 5 ],
        message:  "%{value} is not a valid rating" }

    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id
    belongs_to :product,
        class_name: "Product",
        primary_key: :id,
        foreign_key: :product_id
end
