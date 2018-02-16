app.provider('APIcall', function(){
    var gData={
        api_key: 1234
    };
    this.setDetails = function(eid, edate, url, version){
        gData.event_id = eid;
        gData.event_date = edate;
        gData.baseURL = url;
        gData.app_version = version;
    };
  
    this.$get = function($http){
        var functionalities = {
            apiCall: function (url, type, parms, result){
                $http({
                    method : type,
                    url : gData.baseURL+url,
                    params: Object.assign(gData, parms)
                }).then(function mySuccess(response) {
                    result(response, 'success');
                }, function myError(response) {
                    result(response, 'error');
                });
            }
        };
        return functionalities;
    }
});