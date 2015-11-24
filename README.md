# React Auth Demo

Contains Users and Posts. User auth all in regular Rails.

### Take a look at:

- [`CurrentUserStore`](./app/assets/javascripts/stores/current_user_store.js)
- [`App component`](./app/assets/javascripts/components/app.js.jsx)
- [`Header component`](./app/assets/javascripts/components/header.js.jsx)
- [`SessionsApiUtil`](./app/assets/javascripts/util/sessions_api_util.js)
- [`SessionForm`](./app/assets/javascripts/components/sessions/new_session.js.jsx)
- [`Api::SessionsController`](./app/controllers/api/sessions_controller.rb)

### For Omniauth take a look at:

- [`SessionForm`](./app/assets/javascripts/components/sessions/new_session.js.jsx)
- [`routes.rb`](./config/routes.rb)
- [`config/initializers/omniauth.rb`](./config/initializers/omniauth.rb)
- [`OmniauthController`](./app/controllers/omniauth_controller.rb)
- [`User` model](./app/models/user.rb) (`self.find_or_create_by_auth_hash`)

##### Links:

- [Facebook Developers](https://developers.facebook.com)
- [Omniauth Facebook](https://github.com/mkdynamic/omniauth-facebook)