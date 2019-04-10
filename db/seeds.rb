# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company = Company.create(name: 'St. Johns Episcopal', location: 'Far Rockaways', company_type: 'Hospital')

trades = Trade.create([
  {name: 'plumbing', company_id: 1},
  {name: 'electrician', company_id: 1},
  {name: 'locksmith', company_id: 1},
  {name: 'carpentry', company_id: 1},
  {name: 'housekeeping', company_id: 1},
  {name: 'painting', company_id: 1}
  ])
