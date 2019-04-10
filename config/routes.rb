Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users do
    resources :tasks
  end
  post 'company' => 'company#create'
  get 'company/:company_id' => 'company#show'
  post 'trade' => 'trade#create'
  get 'trade' => 'trade#index'
  get 'trade/:trade_id/tasks' => 'tasks#index'
  post 'trade/:trade_id/task' => 'tasks#create'
  put 'trade/:trade_id/tasks/:task_id' => 'tasks#update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
