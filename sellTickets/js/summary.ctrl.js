angular.module('summary.ctrl', [])
.controller('summary', ['$scope', '$rootScope', 'APIcall', function($s, $rs, API){
	$s.name = "this is summary page....! from controller";
	$s.call = function(){
		$rs.haveLoading = true;
		API.apiCall('registration/BgetEventTransactionsSummary.jsp', 'GET', {}, function(data, type){
			if(type == 'success'){
				alert('success!');
				$rs.haveLoading = false;
			}else{
				alert('fail!')
			}
		});
	}
}]);