# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

50.times do |i|

  user = User.create!(email: "user##{ i + 1 }@example.ninja", password: "123456")

  10.times do |j|
    Post.create!(
      title: "Post ##{ (i * 10) + (j + 1) }",
    )
  end

end

me = User.create!(email: "tommy@appacademy.io", password: "123456")
Post.create!(
  title: "tommy's rare post",
)
