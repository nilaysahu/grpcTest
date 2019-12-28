const request = require('request');
const options = {
  'url': "http://localhost:50052/notes",
  'method': 'GET',
  'json': true
};
request(options, function(err, response, body) {
	if(err){
		console.log("err ",err);
	} else {
		// console.log("response.statusCode ",response.statusCode);
  //   	console.log("Express response body ");	
  //   	console.log(body);
	}
	
});