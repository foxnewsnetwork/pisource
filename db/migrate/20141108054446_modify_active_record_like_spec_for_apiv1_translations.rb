class ModifyActiveRecordLikeSpecForApiv1Translations < ActiveRecord::Migration
  def up
    remove_column :apiv1_translations, :translated_text
    add_column :apiv1_translations, :value, :text
    add_column :apiv1_translations, :interpolations, :text
    add_column :apiv1_translations, :is_proc, :boolean, default: false
  end
  
  def down
    remove_column :apiv1_translations, :value
    remove_column :apiv1_translations, :interpolations
    remove_column :apiv1_translations, :is_proc
    add_column :apiv1_translations, :translated_text, :string
  end    
end
