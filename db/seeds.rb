# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

ActiveRecord::Base.transaction do

    User.destroy_all

    User.create({email: "handForged@email.com", password: "handf0rged", shop_name: "hand_forged", gender: "male", location: "California, USA", about: "Creating things is a passion of mine. I've always had a passion for forging. One day I found a meteorite outside our family home and decided to make a ring out of it. The feedback was tremendous and now, I'm fortunate to say I'm one of the largest producers of meteorite forged goods in the United States!", favorite_material: "meteorite", birthday: Date.new(1990, 4, 30)})
    User.create({email: "gr00t@email.com", password: "iAmGroot"})
    User.create({email: "test", password: "password"})
    User.create({email: "test@email.com", password: "password"})
    User.create({email: "test@test.com", password: "password"})
    User.create({email: "demo@email.com", password: "demopassword"})

    Product.destroy_all

    Product.create({
        title: "Meteorite Ring", 
        description: "All of our rings are made from scientifically verified meteorites. Show your significant other just how special they are to you with a one of a kind meteorite ring!", 
        price: 4699.00,
        merchant_id: 1
    })

}


# create a File from the url
# file = open('<your_file_url>')

# # attach to user
# user.avatar.attach(io: file, filename: 'this_users_avatar.jpg')
# end


