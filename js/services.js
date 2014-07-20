'use strict';


piamedApp.factory('PiamedService', function($resource, $q){

	// console.log('call me service');

	var plantas_medicinales = $resource('http://www.piamed.org/api/index.php',
        { action: "search", callback: 'JSON_CALLBACK'},
        { 'get':  {method: 'JSONP'} });

  	return {
    search: function(request){

    	console.log('lo que llega ->', request);
    	var q = $q.defer();
                        
            plantas_medicinales.get({
                tema: request.tema, parametro: request.query
            },function(resp){
            	q.resolve(resp);
            }, function(err){
            	q.resolve(err);
            });

            return q.promise;
    }
  }

})
// Shared data from settings needed by different controllers
piamedApp.service('SettingsService', function() {
    var _variables = {};

    return {
        get: function(varname) {
            return (typeof _variables[varname] !== 'undefined') ? _variables[varname] : false;
        },
        set: function(varname, value) {
            _variables[varname] = value;
        }
    };
});
