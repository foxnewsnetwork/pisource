namespace :translation do
  desc "Dumps everything from Apiv1::Translation into writing the config/locales/*.yml files"
  task write_yaml: :environment do
    require Rails.root.join "lib", "generica"
    Generica::YamlWriter.new.write_files
  end
end
