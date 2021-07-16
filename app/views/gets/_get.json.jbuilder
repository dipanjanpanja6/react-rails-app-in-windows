json.extract! get, :id, :title, :body, :created_at, :updated_at
json.url get_url(get, format: :json)
