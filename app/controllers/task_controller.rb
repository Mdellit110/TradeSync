class TaskController < ApplicationController
  before_action :authenticate_user
  before_action :set_trade

  # GET trade/:trade_id/tasks
  def index
    @tasks = @trade.tasks.all
    render json: @tasks
  end

  # POST trade/:trade_id/tasks
  def create
    @task = @trade.tasks.new(task_params)

    if @task.save!
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade
      @trade = Trade.find(params[:trade_id])
    end
    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:invoice, :location, :is_emergency, :priority, :description, :est_time, :num_workers, :act_time, :start_time, :is_complete, :in_review)
    end
end
