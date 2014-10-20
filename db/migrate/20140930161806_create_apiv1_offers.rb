class CreateApiv1Offers < ActiveRecord::Migration
  def change
    create_table :apiv1_offers do |t|
      t.references :listing, index: true, polymorphic: true
      t.decimal :price, precision: 17, scale: 4
      t.string :price_unit
      t.string :incoterm
      t.string :location_name
      t.string :buyer_company
      t.string :buyer_email
      t.text :message
      t.timestamps
    end
  end
end
