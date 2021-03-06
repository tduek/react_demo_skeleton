(function(root) {
  root.UsersIndex = React.createClass({
    getInitialState: function() {
      return { users: UsersStore.all() };
    },

    componentDidMount: function() {
      UsersStore.addChangeHandler(this._onChange);
      UsersApiUtil.fetchUsers();
    },

    componentWillUnmount: function() {
      UsersStore.removeChangeHandler(this._onChange);
    },

    render: function() {
      var users = this.state.users.map(function (user) {
        return (
          <li key={ user.id }>
            <a href={ "#/users/" + user.id }>
              { user.email }
            </a>
          </li>
        );
      });
      
      return (
        <div>
          <h1 className="title">Users</h1>
          
          <ul className="users-index">{ users }</ul>
        </div>
      );
    },

    _onChange: function() {
      this.setState({ users: UsersStore.all() });
    }
  })
})(this);