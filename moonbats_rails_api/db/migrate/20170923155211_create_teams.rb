class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :symbol
      t.string :logo
      t.string :league
    end
  end
end
