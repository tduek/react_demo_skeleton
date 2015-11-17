(function(root) {
  root.PostIndexItem = React.createClass({
    render: function() {
      return (
        <li>
          {this.props.post.title}
          <img className="post-image" src={this.props.post.image_url} />
        </li>
      );
    }
  })
})(this);
