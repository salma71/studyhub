class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      # t.belongs_to :user

      t.timestamps
    end
  end
end
