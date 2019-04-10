class TasksController < ApplicationController
  before_action :authenticate_user, only: [:create, :update]
  before_action :set_trade, only: [:index, :create]
  # GET trade/:trade_id/tasks
  def index
    @tasks = @trade.tasks.all
    render json: @tasks, include: :user
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
    if params[:user_id]
      @user = User.find(params[:user_id])
      @task = Task.find(params[:id])
      @task.update(task_params)
      @user.tasks << @task
      render json: @task, include: :user
    else
      @task = Task.find(params[:task_id])
      if @task.update(task_params)
        render json: @task
      else
        render json: @task.errors, status: :unprocessable_entity
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade
      @trade = Trade.find(params[:trade_id])
    end
    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:tasks).permit(:user_id, :id, :invoice, :location, :is_emergency, :priority, :description, :est_time, :num_workers, :end_time, :start_time, :is_complete, :in_review)
    end
end
