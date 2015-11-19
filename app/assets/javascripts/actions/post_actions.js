var PostActions = {
  receivePosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POSTS,
      posts: posts
    });
  },

  receivePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POST,
      post: post
    });
  }
};
