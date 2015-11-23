var SearchApiUtil = {
  
  search: function (query, page) {
    $.ajax({
      url: '/api/search',
      type: 'GET',
      dataType: 'json',
      data: {query: query, page: page},
      success: function (results) {
        SearchResultActions.receiveResults(results);
      }
    });
  },

};