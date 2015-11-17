(function(root) {
  var _posts = [];
  var CHANGE_EVENT = "change";

  var _addPost = function(newPost) {
    _posts.unshift(newPost);
  };

  root.PostsStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function() {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function() {
      return _posts.slice();
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
      case PostConstants.RECEIVE_POSTS:
        _posts = payload.posts
        PostsStore.emit(CHANGE_EVENT);
        break;
      case PostConstants.RECEIVE_POST:
        _addPost(payload.post);
        PostsStore.emit(CHANGE_EVENT);
        break;
      }
    }),

   findPostById: function(id) {
     for (var i = 0; i < _posts.length; i++) {
       if (_posts[i].id === id) {
         return _posts[i];
       }
     }

       return;
     }
  });
})(this);
