
window.Demo = {
  
  initialize: function () {
    var Router = ReactRouter.Router,
        Route = ReactRouter.Route;
    
    React.render(
      <Router>
        <Route path="/" component={ App }>
          <Route path="users" component={ UsersIndex } />
          <Route path="users/:id" component={ UserShow } />
          <Route path="posts" component={ PostsIndex } />
        </Route>
      
        <UsersIndex />
      </Router>,
      document.getElementById('content')
    );
  }
};


