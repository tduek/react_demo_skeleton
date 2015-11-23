
window.Demo = {
  
  initialize: function () {
    var Router = ReactRouter.Router,
        Route = ReactRouter.Route,
        IndexRoute = ReactRouter.IndexRoute;
    
    React.render(
      <Router>
        <Route path="/" component={ App }>
          <IndexRoute component={ UsersIndex } />
          <Route path="users/:id" component={ UserShow } />
          <Route path="posts" component={ PostsIndex } />
          <Route path="search" component={ Search } />
        </Route>
      
        <UsersIndex />
      </Router>,
      document.getElementById('content')
    );
  }
};


