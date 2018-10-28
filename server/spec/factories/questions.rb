FactoryBot.define do
  factory :question do
    content { Faker::Name.unique.name }
    answer { Faker::Number.digit }
  end
end