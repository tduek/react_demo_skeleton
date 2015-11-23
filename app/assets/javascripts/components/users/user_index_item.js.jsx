(function(root) {
  root.UserIndexItem = React.createClass({
    render: function() {
      return (
        <li>
          <a href={ "#/users/" + this.props.user.id }>
            { this.props.user.email }
          </a>
        </li>
      );
    }
  })
})(this);
