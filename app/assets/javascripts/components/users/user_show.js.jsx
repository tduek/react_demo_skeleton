(function(root) {
  root.UserShow = React.createClass({
    getInitialState: function() {
      return this.getStateFromStore();
    },
    
    getStateFromStore: function () {
      return {
        user: UsersStore.findUserById(parseInt(this.props.params.id))
      };
    },

    componentDidMount: function() {
      UsersStore.addChangeHandler(this._onChange);
      UsersApiUtil.fetchUser(this.props.params.id);
    },

    componentWillUnmount: function() {
      UsersStore.removeChangeHandler(this._onChange);
    },

    render: function() {
      var user = this.state.user;
      if (!user) { 
        return (
          <div>DONT HAVE A USER TO RENDER</div>
        );
      }
      
      var posts = [];
      if (user) {
        user.posts && user.posts.forEach(function (post) {
          posts.push(
            <li>{ post.title }</li>
          );
        });
      }
      
      return (
        <div>
          <h1 className="title">UserShow: { user.email }</h1>
          
          <h3>Users posts:</h3>
          <ul className="users-index">{ posts }</ul>
        </div>
      );
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    }
  })
})(this);
