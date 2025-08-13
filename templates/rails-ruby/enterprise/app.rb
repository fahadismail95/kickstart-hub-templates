require 'sinatra'
get '/' do
  'Welcome to Rails Enterprise!'
end
get '/api/data' do
  { message: 'Enterprise API Data' }.to_json
end
