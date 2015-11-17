(function(root) {
  root.PostsIndex = React.createClass({
    render: function() {
      return (
        <ul className="posts-index">
          <PostIndexItem />
        </ul>
      )
    }
  })
})(this);
