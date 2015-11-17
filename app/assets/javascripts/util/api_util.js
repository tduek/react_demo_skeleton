var ApiUtil = {
  fetchPosts: function() {
    $.ajax({
      url: '/api/posts',
      type: 'GET',
      dataType: 'json',
      success: function(posts) {
        PostActions.receivePosts(posts);
      }
    });
  },

  fetchPost: function(id) {
    $.ajax({
      url: '/api/posts/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(post) {
        PostActions.receivePost(post);
      }
    });
  }
};
