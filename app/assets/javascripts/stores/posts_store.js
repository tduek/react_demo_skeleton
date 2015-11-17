(function(root) {
  var _posts = [];
  var CHANGE_EVENT = "change";

  root.PostsStore = $.extend({}, EventEmitter.prototype, {

    addEventHandler: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeEventHandler: function() {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
    })
  });
})(this);
