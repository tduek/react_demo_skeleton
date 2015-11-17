(function(root) {
  root.PostsIndex = React.createClass({
    getInitialState: function() {
      return { posts: PostsStore.all() };
    },

    componentDidMount: function() {
      PostsStore.addChangeHandler(this._onChange);
      ApiUtil.fetchPosts();
    },

    componentWillUnmount: function() {
      PostsStore.removeChangeHandler(this._onChange);
    },

    render: function() {
      return (
        <ul className="posts-index">
          {
            this.state.posts.map(function(post) {
              return <PostIndexItem key={post.id} post={post} />
            })
          }
        </ul>
      )
    },

    _onChange: function() {
      this.setState({ posts: PostsStore.all() });
    }
  })
})(this);
