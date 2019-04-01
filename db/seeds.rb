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

    user1 = User.create({email: "handForged@email.com", password: "handf0rged", shop_name: "Hand Forged", gender: "male", location: "California, USA", about: "Creating things is a passion of mine. I've always had a passion for forging. One day I found a meteorite outside our family home and decided to make a ring out of it. The feedback was tremendous and now, I'm fortunate to say I'm one of the largest producers of meteorite forged goods in the United States!", favorite_material: "meteorite", birthday: Date.new(1990, 4, 30)})
    user2 = User.create({email: "winter_is_coming@email.com" ,password: "agirlwithnoname", shop_name: "Winter is Coming"})
    user3 = User.create({email: "favorite_waterways@email.com", password: "hudsonBay", shop_name: "Favorite Waterways"})
    user4 = User.create({email: "fStopFitz@email.com", password: "black&white", shop_name: "Contrast Photography"})
    user5 = User.create({email: "StyleLife@email.com", password: "100cotton", shop_name: "Soft Threads"})

    user6 = User.create({email: "goldenTouch@email.com", password: "platinum", shop_name: "Silver&Gold"})
    user7 = User.create({email: "caffeinePlease@email.com", password: "extraShot", shop_name: "Dark Roast Prints"})
    user8 = User.create({email: "starvingArtist@email.com", password: "vanGogh", shop_name: "RGB_CMYK"})
    user9 = User.create({email: "handtools@email.com", password: "hammer_nails", shop_name: "hammer&nails"})

    User.create({email: "gr00t@email.com", password: "iAmGroot"})
    User.create({email: "test", password: "password"})
    User.create({email: "test@email.com", password: "password"})
    User.create({email: "test@test.com", password: "password"})
    User.create({email: "demo@email.com", password: "demopassword"})

    ########

    Product.destroy_all

    product = Product.create({
        title: "Meteorite Ring", 
        description: "All of our rings are made from scientifically verified meteorites. Show your special someone just how special they are to you with a one of a kind meteorite ring!", 
        price: 4699.97,
        merchant_id: user1.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/meteorite_00.jpg')
    product.product_pictures.attach(io: file, filename: 'meteorite_ring_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/meteorite_01.jpg')
    product.product_pictures.attach(io: file, filename: 'meteorite_ring_01.jpg')

    ########

    product = Product.create({
        title: "Game of Thrones Baby Bodysuit", 
        description: "Winter is coming! Wrap your little ones in your favorite Game of Thrones sayings that have been reimagined to spread a smile instead of terror!", 
        price: 18.99,
        merchant_id: user2.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/baby_bodysuit_00.jpg')
    product.product_pictures.attach(io: file, filename: 'baby_bodysuit_00.jpg')

    ########

    product = Product.create({
        title: "Hand-Cut Reliefs of your Favorite Waterways", 
        description: "We hand cut multiple layers of high-quality posterboard to make three-dimensional reliefs of your favorite bodies of water! Show off your home town pride in three-dimensional style!", 
        price: 129.01,
        merchant_id: user3.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/bay_reliefs_00.jpg')
    product.product_pictures.attach(io: file, filename: 'bay_reliefs_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/bay_reliefs_01.jpg')
    product.product_pictures.attach(io: file, filename: 'bay_reliefs_01.jpg')

    ########

    product = Product.create({
        title: "Modern Black and White Photographs", 
        description: "Inspire a sense of drama with these high contrast black and white photographs. Shipped with a beautiful frame that is bound to add dramatic flair to any wall.", 
        price: 39.98,
        merchant_id: user4.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/black_and_white_00.jpg')
    product.product_pictures.attach(io: file, filename: 'black_and_white_00.jpg')

    ########

    product = Product.create({
        title: "Kids Birthday Shirts", 
        description: "Let everyone know that its your young ones special day! Available in all sizes, colors, and customizable with names!", 
        price: 26.99,
        merchant_id: user5.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/boys_birthday_shirt_00.jpg')
    product.product_pictures.attach(io: file, filename: 'boys_birthday_shirt_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/boys_birthday_shirt_01.jpg')
    product.product_pictures.attach(io: file, filename: 'boys_birthday_shirt_01.jpg')

    ########

    product = Product.create({
        title: "Funny Cat Tote Bag", 
        description: "All cat people are crazy cat people deep down. Let everyone know where your priorities lie: You'd do anything for your furry ones.", 
        price: 14.29,
        merchant_id: user5.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/cat_tote_00.jpg')
    product.product_pictures.attach(io: file, filename: 'cat_tote_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/cat_tote_01.jpg')
    product.product_pictures.attach(io: file, filename: 'cat_tote_01.jpg')

    ########

    # product = Product.create({
    #     title: "Funny Cat Tote Bag", 
    #     description: "All cat people are crazy cat people deep down. Let everyone know where your priorities lie: You'd do anything for your furry ones.", 
    #     price: 14.29,
    #     merchant_id: user5.id
    # })

    # file = open('https://s3.amazonaws.com/handmade-seeds/cat_tote_00.jpg')
    # product.product_pictures.attach(io: file, filename: 'cat_tote_00.jpg')

    # file = open('https://s3.amazonaws.com/handmade-seeds/cat_tote_01.jpg')
    # product.product_pictures.attach(io: file, filename: 'cat_tote_01.jpg')

    ########

    product = Product.create({
        title: "Gold Statement Earrings", 
        description: "Gold Statement Earrings are guaranteed to catch the eye!", 
        price: 48.89,
        merchant_id: user6.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/circle_statement_earings_00.jpg')
    product.product_pictures.attach(io: file, filename: 'circle_statement_earings_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/circle_statement_earrings_01.jpg')
    product.product_pictures.attach(io: file, filename: 'circle_statement_earrings_01.jpg')

    ########

    product = Product.create({
        title: "The Coffee Dictionary", 
        description: "How do you take your coffee? From Americano to Ristretto, this poster has all of your much adored coffee drinks!", 
        price: 10.99,
        merchant_id: user7.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/coffee_chart_00.jpg')
    product.product_pictures.attach(io: file, filename: 'coffee_chart_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/coffee_chart_01.jpg')
    product.product_pictures.attach(io: file, filename: 'coffee_chart_01.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/coffee_chart_02.jpg')
    product.product_pictures.attach(io: file, filename: 'coffee_chart_02.jpg')

    ########

    product = Product.create({
        title: "Espresso Print", 
        description: "How do you take your coffee? From Americano to Ristretto, have your favorite coffee drink framed on a simple white background that leaves the mouth watering for your favorite cup of caffeine.", 
        price: 14.99,
        merchant_id: user7.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/coffee_prints_00.jpg')
    product.product_pictures.attach(io: file, filename: 'coffee_prints_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/coffee_prints_01.jpg')
    product.product_pictures.attach(io: file, filename: 'coffee_prints_01.jpg')

    ########

    product = Product.create({
        title: "Constellation Necklace", 
        description: "Wear your astrological sign in stunning gold and diamonds for all to see. Taurus - let everyone know you'll stand your ground! Leo - Demonstrate your unwavering courage!",
        price: 112.85,
        merchant_id: user6.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/constellation_necklace_00.jpg')
    product.product_pictures.attach(io: file, filename: 'constellation_necklace_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/constellation_necklace_01.jpg')
    product.product_pictures.attach(io: file, filename: 'constellation_necklace_01.jpg')

    ########

    product = Product.create({
        title: "Contemporary Paintings", 
        description: "These beautiful paintings are made by hand over hundreds of hours. Thick paints and strokes layer paints to give the colors the appearance that they're jumping off the page!", 
        price: 249.55,
        merchant_id: user8.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/contemporary_painting_00.jpg')
    product.product_pictures.attach(io: file, filename: 'contemporary_painting_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/contemporary_painting_01.jpg')
    product.product_pictures.attach(io: file, filename: 'contemporary_painting_01.jpg')

    ########

    product = Product.create({
        title: "Dad's Hammer", 
        description: "Customize your message to dad on these high-quality hammers. Share a family saying, punny joke, or just let him know how special he is to you. We use only the best materials so you can ensure that this hammer endures, just like the love between a father and son.",
        price: 48.99,
        merchant_id: user9.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/dad_hammer_00.jpg')
    product.product_pictures.attach(io: file, filename: 'dad_hammer_00.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/dad_hammer_01.jpg')
    product.product_pictures.attach(io: file, filename: 'dad_hammer_01.jpg')

    file = open('https://s3.amazonaws.com/handmade-seeds/dad_hammer_02.jpg')
    product.product_pictures.attach(io: file, filename: 'dad_hammer_02.jpg')

    ########

    product = Product.create({
        title: "Set of Three Landscape Prints", 
        description: "Artworks printed on high quality matte or glossy paper (depends on your choice) that have archival value of many years in home display. Professional paper with a matte non-reflective surface that feels velvety soft or with a bright, glossy finish.",
        price: 45.55,
        merchant_id: user4.id
    })

    file = open('https://s3.amazonaws.com/handmade-seeds/desert_prints_00.jpg')
    product.product_pictures.attach(io: file, filename: 'desert_prints_00.jpg')

end



