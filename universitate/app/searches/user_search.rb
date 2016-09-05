require "searchlight/adapters/action_view"

class UserSearch < Searchlight::Search
  include Searchlight::Adapters::ActionView

  def base_query
    User.all
  end

  def search_complete_name_like
    query.where("first_name || ' ' || last_name ILIKE ?", "%#{options[:complete_name_like]}%")
  end

end
