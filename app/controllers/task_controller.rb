class TaskController < ApplicationController
  before_action :authenticate_user
  before_action :set_trade
  before_action :set_user, only: [:update]
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
    @task = Task.find(params[:task_id])
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade
      @trade = Trade.find(params[:trade_id])
    end
    def set_user
      @user = User.find(task_params[:completed_by_id])
    end
    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:completed_by_id, :invoice, :location, :is_emergency, :priority, :description, :est_time, :num_workers, :act_time, :start_time, :is_complete, :in_review)
    end
end
