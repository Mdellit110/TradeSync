class CompanyController < ApplicationController

  # POST /companies
  def create
    @company = Company.new(company_params)

    if @company.save
      render json: @company, status: :created, location: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def company_params
      params.require(:company).permit(:name, :location, :company_type)
    end
end
