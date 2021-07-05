$.ajax({
    type: 'GET',
    url: My Url,
    contentType: 'application/json',
    dataType:'jsonp',
    responseType:'application/json',
    xhrFields: {
      withCredentials: false
    },
    headers: {
      'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Headers':'application/json',
    },
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log("FAIL....=================");
    }
  });