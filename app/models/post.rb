class Post < ActiveRecord::Base

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_file_type :image, content_type: /\Aimage\/.*\Z/
end
