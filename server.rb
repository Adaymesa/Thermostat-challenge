require "sinatra"
require "json"

set :public_folder, proc { File.join(root) }

get '/settings' do
	headers 'Access-Control-Allow-Origin' => '*'
	@json = File.read('thermostat_settings.json')
end

post '/settings' do
	headers 'Access-Control-Allow-Origin' => '*'
	@json = request.body.read
	File.open('thermostat_settings.json', 'w') do |f|
		f.write(@json)
	end
end