(function (root) {
  var _search_results = {results: []};
  var CHANGE_EVENT = "change";

  root.SearchResultsStore = $.extend({}, EventEmitter.prototype, {
    
    
    
    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    results: function () {
      return _search_results.results;
    },
    
    totalCount: function () {
      return _search_results.total_count || 0;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
      
        case SearchResultConstants.RECEIVE_RESULTS:
          _search_results = payload.results;
          SearchResultsStore.emit(CHANGE_EVENT);
          break;

      }
    }),

  });
})(this);
