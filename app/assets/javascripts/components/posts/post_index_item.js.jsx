(function(root) {
  root.PostIndexItem = React.createClass({
    render: function() {
      return (
        <li>{this.props.post.title}</li>
      );
    }
  })
})(this);
