# Search Demo

Contains Users and Posts. User auth all in regular Rails.

Take a look at:

- [React routes](./app/assets/javascripts/demo.js.jsx)
- [`SearchResultsStore`](./app/assets/javascripts/stores/search_results_store.js)
- [`Search component`](./app/assets/javascripts/components/search_results.js.jsx)
- [`SearchApiUtil`](./app/assets/javascripts/util/search_api_util.js)
- [`SessionForm`](./app/assets/javascripts/components/sessions/new_session.js.jsx)
- [`Api::SearchController`](./app/controllers/api/search_controller.rb)
- [`api/search/index.json.jbuilder`](./app/views/api/search/index.json.jbuilder)

### Docs
- [PgSearch](https://github.com/Casecommons/pg_search) (full text search) 
- [Kaminari](https://github.com/amatsuda/kaminari) (pagination) 