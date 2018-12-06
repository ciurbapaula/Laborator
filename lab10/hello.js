const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('/'))
app.get('/hello', function(request, response) {
	response.sendfile('./hello.html');
	//response.sendfile('./hello.css');
});
app.listen(port, () => console.log(`Example app
listening on port ${port}!`));
