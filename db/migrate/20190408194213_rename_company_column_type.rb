class RenameCompanyColumnType < ActiveRecord::Migration[5.2]
  def change
    rename_column :companies, :type, :company_type
  end
end