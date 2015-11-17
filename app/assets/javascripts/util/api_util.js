var ApiUtil = {
  fetchPosts: function() {
    $.ajax({
      url: '/api/posts',
      type: 'GET',
      dataType: 'json',
      success: function(posts) {
        console.log(posts);
      }
    });
  },

  fetchPost: function(id) {
    $.ajax({
      url: '/api/posts/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(post) {
        console.log(post);
      }
    });
  }
};
