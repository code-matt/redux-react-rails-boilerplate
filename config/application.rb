require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReduxReactRails
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    config.active_record.logger = nil
    # config.active_job.queue_adapter = :sucker_punch
    paths['public'] = File.join 'client', 'build'
    config.autoload_paths += Dir[Rails.root.join('app')]
  end
end

Rails.application.config.middleware.insert_after(
  ActionDispatch::Static,
  ActionDispatch::Static,
  Rails.root.join("public").to_s,
  Rails.application.config.static_cache_control
)
