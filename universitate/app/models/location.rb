# == Schema Information
#
# Table name: locations
#
#  id           :integer          not null, primary key
#  full_address :string
#  lat          :integer
#  lng          :integer
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Location < ApplicationRecord
  belongs_to :user

  validates :user_id, :full_address, :lat, :lng, presence: true
end