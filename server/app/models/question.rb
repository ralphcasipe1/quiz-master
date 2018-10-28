class Question < ApplicationRecord
  validates :content, 
    presence: true, 
    uniqueness: { case_sensitive: false }, 
    length: { 
      minimum: 5, 
      maximum: 300, 
      too_long: "At most, %{count} characters", 
      too_short: "At least, %{count} characters" 
    }

  validates :answer, presence: true
end
