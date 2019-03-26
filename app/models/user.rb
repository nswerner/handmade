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

    validates :session_token, :cart_id, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :shop_name, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token, :ensure_cart

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
        user = user.find_by(email: email)
        user && user.is_password?(password) ? user : nil
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

    def ensure_cart
        # CHANGE THIS WHEN CART CLASS IS CREATED
        # self.cart_id ||= Cart.create.id
        self.cart_id ||= rand(1..10000)
    end
end


