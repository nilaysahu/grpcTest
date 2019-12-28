const express = require('express');
var app = express();

const notes = { id: '1', title: 'Note 1', content: 'Content 1'}

app.get('/notes', function(request, response){
	// console.log("here....");
	response.status(200).json(notes);
});
const port = 50052;
app.listen(port);
console.log('Express Listening to port'+ port);