require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Universitate
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    ActionView::Base.field_error_proc = Proc.new { |html_tag, instance|
      "<div class=\"field_with_errors\">#{html_tag}<span class=\"help-block red\">&nbsp;#{instance.error_message.uniq.join(', ')}</span></div>".html_safe
    }

    config.action_view.embed_authenticity_token_in_remote_forms = true
  end
end
