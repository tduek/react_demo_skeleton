var PostsApiUtil = {
  fetchPosts: function () {
    $.ajax({
      url: '/api/posts',
      type: 'GET',
      dataType: 'json',
      success: function (posts) {
        PostActions.receivePosts(posts);
      }
    });
  },

  fetchPost: function (id) {
    $.ajax({
      url: '/api/posts/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (post) {
        PostActions.receivePost(post);
      }
    });
  },

  createPost: function (attrs, callback) {
    $.ajax({
      url: '/api/posts',
      type: 'POST',
      dataType: 'json',
      data: attrs,
      success: function (post) {
        PostActions.receivePost(post);
        callback && callback();
      }
    })
  }
};
