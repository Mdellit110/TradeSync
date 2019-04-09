Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users
  post 'company' => 'company#create'
  post 'trade' => 'trade#create'
  get 'trade' => 'trade#index'
  get 'trade/:trade_id/tasks' => 'task#index'
  post 'trade/:trade_id/task' => 'task#create'
  put 'trade/:trade_id/tasks' => 'task#update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
