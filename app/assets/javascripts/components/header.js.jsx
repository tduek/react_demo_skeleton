(function(root) {
  root.Header = React.createClass({

    getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser()
      };
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeHandler(this._onChange)
    },

    _onChange: function () {
      this.setState({currentUser: CurrentUserStore.currentUser()});
    },
    
    logout: function () {
      SessionsApiUtil.logout();
    },

    render: function() {
      if (CurrentUserStore.isLoggedIn()) {
        return (
          <div>
            Logged in as
            { this.state.currentUser.email }
            <button onClick={ this.logout }>LOG OUT</button>
          </div>
        );
      } else {
        return ( 
          <div>
            <a href="#/login">Login</a>
          </div>
        );
      }
      
    },

  })
})(this);