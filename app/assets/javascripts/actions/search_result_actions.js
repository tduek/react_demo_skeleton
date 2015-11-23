var SearchResultActions = {
  
  receiveResults: function (results) {
    AppDispatcher.dispatch({
      actionType: SearchResultConstants.RECEIVE_RESULTS,
      results: results
    });
  }
  
};