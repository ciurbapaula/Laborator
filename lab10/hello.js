const express = require("express");
const app = express();
const port = 3000;
var fs = require('fs');
const request = require('request');


app.use(express.static('lab10'))
app.get('/hello', function(request, response) {
	response.sendfile('./hello.html');
	//response.sendfile('./hello.css');
});

app.get('/paula',function(request,response){
	fs.readFile('text.txt', 'utf8', function(err, contents) {
    	console.log(contents);
    	response.send(contents);
	});
});
app.get('/pau',function(request,response){
	request('https://jsonplaceholder.typicode.com/todos/',{ json: true }, (err, res, body) => {
			  if (err) { return console.log(err); }
			  console.log(body.url);
			  console.log(body.explanation);
			  response.send(body);
           });
});

app.listen(port, () => console.log(`Example app
listening on port ${port}!`));

fs.readFile('text.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
