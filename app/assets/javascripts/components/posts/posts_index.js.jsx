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
        <div>
          <PostForm />
          <h1 className="title">Posts</h1>
          <ul className="posts-index">
            {
              this.state.posts.map(function(post) {
                return <PostIndexItem key={post.id} post={post} />
              })
            }
          </ul>
        </div>
      )
    },

    _onChange: function() {
      this.setState({ posts: PostsStore.all() });
    }
  })
})(this);
