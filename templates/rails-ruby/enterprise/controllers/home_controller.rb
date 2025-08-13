class HomeController < Sinatra::Base
  get '/' do
    erb :home
  end
  get '/api/data' do
    content_type :json
    { message: 'Enterprise API Data' }.to_json
  end
end
