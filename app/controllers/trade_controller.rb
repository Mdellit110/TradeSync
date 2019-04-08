class TradeController < ApplicationController

  # POST /trades
  def create
    @trade = Trade.new(trade_params)

    if @trade.save
      render json: @trade, status: :created, location: @trade
    else
      render json: @trade.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def trade_params
      params.require(:trade).permit(:name)
    end
end
