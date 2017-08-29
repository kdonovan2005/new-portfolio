class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :tag_line
      t.string :description
      t.string :url
      t.string :photo
      t.string :client
      t.string :complete
      t.string :tech
      t.timestamps
    end
  end
end
