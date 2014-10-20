# == Schema Information
#
# Table name: apiv1_employees
#
#  id             :integer          not null, primary key
#  person_name    :string(255)
#  employee_title :string(255)
#  email          :string(255)
#  phone_number   :string(255)
#  picture_id     :integer
#  created_at     :datetime
#  updated_at     :datetime
#

class Apiv1::Employee < ActiveRecord::Base
  belongs_to :picture,
    class_name: 'Apiv1::Picture'

  def to_ember_hash
    return attributes.merge mug_shot: picture.pic(:thumb) if picture.present?
    attributes
  end
end