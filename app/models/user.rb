# == Schema Information
#
# Table name: users
#
#  id                :bigint(8)        not null, primary key
#  email             :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  cart_id           :integer          not null
#  shop_name         :string
#  image_url         :text
#  gender            :string
#  location          :string
#  birthday          :date
#  about             :text
#  favorite_material :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ApplicationRecord

    attr_reader :password

    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :cart_id, uniqueness: true, allow_nil: true
    validates :shop_name, uniqueness: true, allow_nil: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    has_one_attached :photo

    has_many :listed_products,
        class_name: "Product",
        primary_key: :id,
        foreign_key: :merchant_id

    has_many :previous_carts,
        class_name: "Cart",
        primary_key: :id,
        foreign_key: :user_id

    belongs_to :cart,
        class_name: "Cart",
        primary_key: :id,
        foreign_key: :cart_id

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if !user
            return ["This email address is not associated with an account"]
        elsif !user.is_password?(password)
            return ["Password was incorrect"]
        else 
            return user
        end
    end

    def is_password?(password)
        bpass = BCrypt::Password.new(self.password_digest)
        bpass.is_password?(password)
    end

    def self.generate_session_token
        token = SecureRandom::urlsafe_base64

        while User.find_by(session_token: token)
            token = SecureRandom::urlsafe_base64
        end

        token
    end

end


