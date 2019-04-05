# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  price       :float            not null
#  merchant_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
    validates :title, :description, :price, :merchant_id, presence: true
    validates :title, uniqueness: { scope: :merchant_id }
    validates :title, uniqueness: { scope: :description }

    validate :ensure_picture

    has_many_attached :product_pictures
    belongs_to :merchant,
        class_name: "User",
        primary_key: :id,
        foreign_key: :merchant_id
    
    def ensure_picture
        unless self.product_pictures.attached?
            errors[:product] << "must be attached"
        end
    end
end
