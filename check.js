module.exports = (function () {

  var request     = require('request')
    , toJson      = require('xmljson').to_json
    , queryString = require('query-string')
    , apiUrl      = 'https://www.whoisxmlapi.com/whoisserver/WhoisService?'
  
  function check (domain, callBack) {
    var data = {
        cmd         : 'GET_DN_AVAILABILITY'
      , domainName  : domain // I need to parse the domain
      , username    : checking.username
      , password    : checking.password
    }
    
    request(apiUrl + queryString.stringify(data), function (error, response, body) {
      if(error) return callBack(error);
      toJson(body.toString(), function (error, data) { 
        /* handling errors */
        if(error) return callBack(new TypeError('The whoisxmlapi is down, please try later'));
        if(data.ErrorMessage) return callBack(new TypeError(data.ErrorMessage.msg));

        /* data returned successfully */
        callBack(null, data.DomainInfo.domainAvailability === "AVAILABLE");
      });
    });
  }

  return checking = {
      username  : ''
    , password  : ''
    , check     : check
    , checkAll  : function () {} // bulk availability checking
    , balance   : function () {} // returning whoisxmlapi balance of the username
  }
  
}());